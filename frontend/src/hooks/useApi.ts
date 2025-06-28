// src/hooks/useApi.ts
import { useMemo } from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosHeaders } from 'axios'
import { useRouter } from 'next/router'
import { Api } from 'Nova/api/api'
import { useLoadingStore } from 'Nova/store/Loading/loadingStore'
import { useAuthStore } from 'Nova/store/AuthStore/AuthStore'

// Tách logic tạo API client ra thành function riêng
export const createApiClient = (token?: string, baseURL?: string) => {
  const apiBaseURL = baseURL || 'http://160.250.246.33:5199'

  // axios instance để retry sau khi refresh token
  const retryAxios = axios.create({ baseURL: apiBaseURL })
  retryAxios.interceptors.response.use(
    response => response,
    err => {
      if (err.response?.status === 401) {
        // Handle 401 error
        console.error('Unauthorized access')
      }
      return Promise.reject(err)
    }
  )

  // axios chính với interceptor loading + auth + refresh 401
  const apiAxios = axios.create({ baseURL: apiBaseURL })

  // request interceptor
  apiAxios.interceptors.request.use(config => {
    const headers = new AxiosHeaders(config.headers || {})

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    if (!(config.data instanceof FormData)) {
      headers.set('Content-Type', 'application/json')
    }

    return { ...config, headers }
  })

  // response interceptor
  apiAxios.interceptors.response.use(
    response => {
      return response
    },
    async (error: AxiosError & { config?: AxiosRequestConfig & { _retry?: boolean } }) => {
      const { config, response } = error

      if (response?.status === 401 && config && !config._retry) {
        config._retry = true
        try {
          // Retry with same config
          return retryAxios.request(config)
        } catch (refreshError) {
          return Promise.reject(refreshError)
        }
      }

      return Promise.reject(error)
    }
  )

  // swagger client wrapper với customFetch dùng apiAxios
  return new Api({
    baseUrl: apiBaseURL,
    securityWorker: () =>
      token
        ? { headers: { Authorization: `Bearer ${token}` } }
        : {},
    customFetch: async (input, init) => {
      // Xác định URL từ string | URL | Request
      const url =
        typeof input === 'string'
          ? input
          : input instanceof URL
          ? input.toString()
          : input.url

      const cfg: AxiosRequestConfig = {
        url,
        method: init?.method as AxiosRequestConfig['method'],
        baseURL: apiBaseURL,
        headers: init?.headers as AxiosRequestConfig['headers'],
        data: init?.body,
      }
      const resp = await apiAxios.request(cfg)
      const headersInit = resp.headers as unknown as HeadersInit
      return new Response(JSON.stringify(resp.data), {
        status: resp.status,
        headers: headersInit,
      })
    },
  })
}

export const useApi = () => {
  const router = useRouter()
  const authStore = useAuthStore()
  const loadingStore = useLoadingStore()
  const baseURL = 'http://160.250.246.33:5199/'

  // axios instance để retry sau khi refresh token
  const retryAxios = useMemo(() => {
    const instance = axios.create({ baseURL })
    instance.interceptors.response.use(
      response => response,
      err => {
        if (err.response?.status === 401) {
          authStore.logout()
          router.push('/?error=timeout')
        }
        return Promise.reject(err)
      }
    )
    return instance
  }, [baseURL, authStore, router])

  // axios chính với interceptor loading + auth + refresh 401
  const apiAxios = useMemo(() => {
    const instance = axios.create({ baseURL })

    // request interceptor
    instance.interceptors.request.use(config => {
      const headers = new AxiosHeaders(config.headers || {})

      if (authStore.token) {
        headers.set('Authorization', `Bearer ${authStore.token}`)
      }
      if (!(config.data instanceof FormData)) {
        headers.set('Content-Type', 'application/json')
      }

      loadingStore.setLoading(true)
      return { ...config, headers }
    })

    // response interceptor
    instance.interceptors.response.use(
      response => {
        setTimeout(() => loadingStore.setLoading(false), 250)
        return response
      },
      async (error: AxiosError & { config?: AxiosRequestConfig & { _retry?: boolean } }) => {
        setTimeout(() => loadingStore.setLoading(false), 250)
        const { config, response } = error

        if (response?.status === 401 && config && !config._retry) {
          if (authStore.isAuthenticated) {
            config._retry = true
            try {
              await authStore.refreshToken()
              const newHeaders = new AxiosHeaders(config.headers || {})
              newHeaders.set('Authorization', `Bearer ${authStore.token}`)
              config.headers = newHeaders
              return retryAxios.request(config)
            } catch (refreshError) {
              authStore.logout()
              router.push('/?error=timeout')
              return Promise.reject(refreshError)
            }
          } else {
            router.push('/?error=timeout')
            return Promise.reject(error)
          }
        }

        return Promise.reject(error)
      }
    )

    return instance
  }, [baseURL, authStore, loadingStore, retryAxios, router])

  // swagger client wrapper với customFetch dùng apiAxios
  const apiClient = useMemo(() => {
    return new Api({
      baseUrl: baseURL,
      securityWorker: () =>
        authStore.token
          ? { headers: { Authorization: `Bearer ${authStore.token}` } }
          : {},
      customFetch: async (input, init) => {
        // Xác định URL từ string | URL | Request
        const url =
          typeof input === 'string'
            ? input
            : input instanceof URL
            ? input.toString()
            : input.url

        const cfg: AxiosRequestConfig = {
          url,
          method: init?.method as AxiosRequestConfig['method'],
          baseURL,
          headers: init?.headers as AxiosRequestConfig['headers'],
          data: init?.body,
        }
        const resp = await apiAxios.request(cfg)
        const headersInit = resp.headers as unknown as HeadersInit
        return new Response(JSON.stringify(resp.data), {
          status: resp.status,
          headers: headersInit,
        })
      },
    })
  }, [baseURL, authStore.token, apiAxios])

  return apiClient.api
}

export type ApiClient = ReturnType<typeof useApi>
