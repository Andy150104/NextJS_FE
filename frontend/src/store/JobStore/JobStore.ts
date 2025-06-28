import { create } from 'zustand'
import { JobListEntity, JobDetailEntity } from '../../api/api'
import { createApiClient } from '../../hooks/useApi'

interface JobState {
  jobs: JobListEntity[]
  jobDetail: JobDetailEntity | null
  loading: boolean
  error: string | null
  totalJobs: number
  currentPage: number
  pageSize: number
}

interface JobActions {
  fetchJobs: (token?: string) => Promise<void>
  fetchJobDetail: (id: number, token?: string) => Promise<void>
  setCurrentPage: (page: number) => void
  setPageSize: (size: number) => void
  clearError: () => void
  reset: () => void
}

const initialState: JobState = {
  jobs: [],
  jobDetail: null,
  loading: false,
  error: null,
  totalJobs: 0,
  currentPage: 1,
  pageSize: 10,
}

export const useJobStore = create<JobState & JobActions>((set) => ({
  ...initialState,

  fetchJobs: async (token?: string) => {
    set({ loading: true, error: null })
    try {
      const api = createApiClient(token)
      const response = await api.api.jobGetJobs()
      
      if (response.data.success && response.data.response) {
        set({
          jobs: response.data.response,
          totalJobs: response.data.response.length,
          loading: false,
        })
      } else {
        set({
          error: response.data.message || 'Failed to fetch jobs',
          loading: false,
        })
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while fetching jobs'
      set({
        error: errorMessage,
        loading: false,
      })
    }
  },

  fetchJobDetail: async (id: number, token?: string) => {
    set({ loading: true, error: null })
    try {
      const api = createApiClient(token)
      const response = await api.api.jobGetJob(id)
      
      if (response.data.success && response.data.response) {
        set({
          jobDetail: response.data.response,
          loading: false,
        })
      } else {
        set({
          error: response.data.message || 'Failed to fetch job detail',
          loading: false,
        })
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while fetching job detail'
      set({
        error: errorMessage,
        loading: false,
      })
    }
  },

  setCurrentPage: (page: number) => {
    set({ currentPage: page })
  },

  setPageSize: (size: number) => {
    set({ pageSize: size, currentPage: 1 })
  },

  clearError: () => {
    set({ error: null })
  },

  reset: () => {
    set(initialState)
  },
})) 