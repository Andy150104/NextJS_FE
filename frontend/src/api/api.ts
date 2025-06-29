/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type BaseResponse = AbstractApiResponseOfString & {
  response?: string;
};

export interface AbstractApiResponseOfString {
  success?: boolean;
  messageId?: string;
  message?: string;
  detailErrorList?: DetailError[];
  response?: string | null;
}

export interface DetailError {
  field?: string;
  messageId?: string;
  errorMessage?: string;
}

export interface InsertUserRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /** @minLength 1 */
  password: string;
  /** @minLength 1 */
  firstName: string;
  /** @minLength 1 */
  lastName: string;
}

export interface InsertUserVerifyRequest {
  email?: string;
  otp?: string;
}

export type UserResponse = AbstractApiResponseOfUserEntity & {
  response?: UserEntity;
};

export interface UserEntity {
  /** @format guid */
  userId?: string;
  email?: string;
  phoneNumber?: string | null;
  firstName?: string;
  lastName?: string;
  /** @format date-time */
  dateOfBirth?: string | null;
  /** @format byte */
  gender?: number | null;
  address?: string | null;
  avatarUrl?: string | null;
}
export interface JobDetail {
  id: number;
  title: string;
  companyName: string;
  industry: string;
  type: string;
  salary: string;
  address: string;
  experienceRequirement: string;
  degreeRequirement: string;
  jobDescription: string;
  keyResponsibility: string;
  professionalSkill: string;
  createdAt: string;
}

export interface JobDetailResponse {
  success?: boolean;
  messageId?: string;
  message?: string;
  detailErrorList?: DetailError[] | null;
  response?: JobDetail | null;
}

export interface DetailError {
  field?: string;
  messageId?: string;
  errorMessage?: string;
}

export interface AbstractApiResponseOfUserEntity {
  success?: boolean;
  messageId?: string;
  message?: string;
  detailErrorList?: DetailError[];
  response?: UserEntity | null;
}

export type QuizListResponse = AbstractApiResponseOfListOfQuizEntity & {
  response?: QuizEntity[];
};

export interface QuizEntity {
  /** @format int32 */
  quizId?: number;
  title?: string;
  description?: string | null;
  industry?: string;
  /** @format int32 */
  duration?: number;
  /** @format int32 */
  questionCount?: number;
  /** @format date-time */
  createdAt?: string;
}

export interface AbstractApiResponseOfListOfQuizEntity {
  success?: boolean;
  messageId?: string;
  message?: string;
  detailErrorList?: DetailError[];
  response?: QuizEntity[] | null;
}

export type QuizDetailResponse = AbstractApiResponseOfQuizDetailEntity & {
  response?: QuizDetailEntity;
};

export interface QuizDetailEntity {
  /** @format int32 */
  quizId?: number;
  title?: string;
  description?: string | null;
  industry?: string;
  /** @format int32 */
  duration?: number;
  /** @format date-time */
  createdAt?: string;
  questions?: QuestionEntity[];
}

export interface QuestionEntity {
  /** @format int32 */
  questionId?: number;
  questionTitle?: string;
  questionType?: string;
  /** @format int32 */
  orderIndex?: number;
  answers?: AnswerEntity[];
}

export interface AnswerEntity {
  /** @format int32 */
  answerId?: number;
  answerText?: string;
  /** @format int32 */
  orderIndex?: number;
}

export interface AbstractApiResponseOfQuizDetailEntity {
  success?: boolean;
  messageId?: string;
  message?: string;
  detailErrorList?: DetailError[];
  response?: QuizDetailEntity | null;
}

export type JobListResponse = AbstractApiResponseOfListOfJobListEntity & {
  response?: JobListEntity[];
};

export interface JobListEntity {
  /** @format int32 */
  id?: number;
  title?: string;
  companyName?: string;
  industry?: string;
  type?: string;
  salary?: string;
  address?: string;
}

export interface AbstractApiResponseOfListOfJobListEntity {
  success?: boolean;
  messageId?: string;
  message?: string;
  detailErrorList?: DetailError[];
  response?: JobListEntity[] | null;
}

export type JobDetailResponse = AbstractApiResponseOfJobDetailEntity & {
  response?: JobDetailEntity;
};

export interface JobDetailEntity {
  /** @format int32 */
  id?: number;
  title?: string;
  companyName?: string;
  industry?: string;
  type?: string;
  salary?: string;
  address?: string;
  experienceRequirement?: string;
  degreeRequirement?: string;
  jobDescription?: string;
  keyResponsibility?: string;
  professionalSkill?: string;
  /** @format date-time */
  createdAt?: string;
}

export interface AbstractApiResponseOfJobDetailEntity {
  success?: boolean;
  messageId?: string;
  message?: string;
  detailErrorList?: DetailError[];
  response?: JobDetailEntity | null;
}

export interface JobCreateRequest {
  /**
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  companyName: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  industry: string;
  /** @minLength 1 */
  type: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  salary: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /** @maxLength 100 */
  experienceRequirement?: string;
  /** @maxLength 100 */
  degreeRequirement?: string;
  /** @minLength 1 */
  jobDescription: string;
  /** @minLength 1 */
  keyResponsibility: string;
  /** @minLength 1 */
  professionalSkill: string;
}

export type JobApplicationResponse =
  AbstractApiResponseOfJobApplicationEntity & {
    response?: JobApplicationEntity;
  };

export interface JobApplicationEntity {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  jobId?: number;
  /** @format guid */
  userId?: string;
  cvUrl?: string;
  coverLetter?: string;
  status?: string;
  /** @format date-time */
  appliedAt?: string;
  job?: JobDetailEntity;
}

export interface AbstractApiResponseOfJobApplicationEntity {
  success?: boolean;
  messageId?: string;
  message?: string;
  detailErrorList?: DetailError[];
  response?: JobApplicationEntity | null;
}

export interface JobApplicationCreateRequest {
  /** @format int32 */
  jobId: number;
  /**
   * @format guid
   * @minLength 1
   */
  userId: string;
  /** @format binary */
  cvFile?: File;
  coverLetter?: string | null;
}

export interface ComprehensiveCareerGuidanceResponse {
  overallAssessment?: OverallAssessment;
  recommendedCareerPaths?: RecommendedCareerPath[];
  personalizedDevelopmentPlan?: PersonalizedDevelopmentPlan;
  strengthsAndGaps?: StrengthsAndGaps;
  industryInsights?: IndustryInsights;
}

export interface OverallAssessment {
  /** @format int32 */
  careerReadinessScore?: number;
  technicalMaturity?: string;
  personalityCareerMatch?: string;
  experienceGapAnalysis?: string;
}

export interface RecommendedCareerPath {
  position?: string;
  /** @format int32 */
  matchPercentage?: number;
  timeline?: string;
  reasoning?: string;
  requiredSkills?: string[];
  growthPotential?: string;
}

export interface PersonalizedDevelopmentPlan {
  immediateActions?: string[];
  shortTermGoals?: string[];
  longTermVision?: string[];
  skillPriorities?: SkillPriority[];
  learningResources?: LearningResource[];
  recommendedLearningPath?: string;
}

export interface SkillPriority {
  skillName?: string;
  priority?: string;
  reason?: string;
  /** @format int32 */
  estimatedLearningTimeWeeks?: number;
  prerequisites?: string[];
}

export interface LearningResource {
  resourceName?: string;
  type?: string;
  url?: string;
  description?: string;
  difficulty?: string;
  /** @format int32 */
  estimatedHours?: number;
  isFree?: boolean;
}

export interface StrengthsAndGaps {
  coreStrengths?: Strength[];
  technicalStrengths?: Strength[];
  softSkillStrengths?: Strength[];
  criticalGaps?: Gap[];
  niceToHaveSkills?: Gap[];
  overallStrengthSummary?: string;
  improvementStrategy?: string;
}

export interface Strength {
  name?: string;
  description?: string;
  /** @format int32 */
  level?: number;
  evidence?: string;
  applicableRoles?: string[];
}

export interface Gap {
  skillName?: string;
  currentLevel?: string;
  requiredLevel?: string;
  impact?: string;
  reason?: string;
  improvementSuggestions?: string[];
}

export interface IndustryInsights {
  marketTrends?: string[];
  emergingOpportunities?: EmergingOpportunity[];
  salaryExpectations?: SalaryExpectation;
  jobMarketOutlook?: string;
  inDemandSkills?: string[];
  industryAdvice?: string;
}

export interface EmergingOpportunity {
  field?: string;
  description?: string;
  growthPotential?: string;
  requiredSkills?: string[];
  timeline?: string;
}

export interface SalaryExpectation {
  entryLevel?: string;
  midLevel?: string;
  seniorLevel?: string;
  currency?: string;
  region?: string;
  factorsAffectingSalary?: SalaryFactor[];
}

export interface SalaryFactor {
  factor?: string;
  impact?: string;
  description?: string;
}

export interface CompleteCareerAssessmentRequest {
  stage1?: Stage1SelfDiscovery;
  stage2?: Stage2TechnicalAssessment;
  stage3?: Stage3PersonalityAndCV;
  requestId?: string;
  /** @format date-time */
  completedAt?: string;
}

export interface Stage1SelfDiscovery {
  /** @format int32 */
  currentSemester?: number;
  academicLevel?: string;
  interestedFields?: string[];
  preferredTechnologies?: string[];
  careerGoal?: string;
  learningStyle?: string;
}

export interface Stage2TechnicalAssessment {
  programmingKnowledge?: TechnicalCategory;
  databaseKnowledge?: TechnicalCategory;
  systemDesign?: TechnicalCategory;
  specializedSkills?: TechnicalCategory;
  /** @format double */
  overallTechnicalScore?: number;
  technicalLevel?: string;
}

export interface TechnicalCategory {
  categoryName?: string;
  questions?: TechnicalQuestion[];
  /** @format double */
  score?: number;
  /** @format int32 */
  totalQuestions?: number;
  /** @format int32 */
  correctAnswers?: number;
}

export interface TechnicalQuestion {
  questionId?: string;
  question?: string;
  userAnswer?: string;
  correctAnswer?: string;
  isCorrect?: boolean;
  difficulty?: string;
  topic?: string;
  /** @format int32 */
  points?: number;
}

export interface Stage3PersonalityAndCV {
  personality?: PersonalityAssessment;
  softSkills?: SoftSkillsAssessment;
}

export interface PersonalityAssessment {
  questions?: PersonalityQuestion[];
  mbtiType?: string;
  traitScores?: Record<string, number>;
  workingStylePreferences?: string[];
  motivationFactors?: string[];
}

export interface PersonalityQuestion {
  questionId?: string;
  question?: string;
  answer?: string;
  category?: string;
  /** @format int32 */
  score?: number;
}

export interface SoftSkillsAssessment {
  skillRatings?: Record<string, number>;
  preferredWorkEnvironment?: string[];
  learningPreference?: string;
  problemSolvingStyle?: string;
}

export interface AIResponse {
  result?: string | null;
}

export interface AIRequest {
  prompt?: string | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://160.250.246.33:5199";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
          .then((data) => {
            if (r.ok) {
              r.data = data;
            } else {
              r.error = data;
            }
            return r;
          })
          .catch((e) => {
            r.error = e;
            return r;
          });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title My Title
 * @version 1.0.0
 * @baseUrl http://160.250.246.33:5199
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags User
     * @name UserInsertUser
     * @request POST:/api/v1/User/InsertUser
     * @secure
     */
    userInsertUser: (data: InsertUserRequest, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/api/v1/User/InsertUser`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserInsertUserVerify
     * @request POST:/api/v1/User/InsertUserVerify
     * @secure
     */
    userInsertUserVerify: (
      data: InsertUserVerifyRequest,
      params: RequestParams = {},
    ) =>
      this.request<BaseResponse, any>({
        path: `/api/v1/User/InsertUserVerify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserGetUserProfile
     * @request GET:/api/v1/User/GetUserProfile
     * @secure
     */
    userGetUserProfile: (params: RequestParams = {}) =>
      this.request<UserResponse, any>({
        path: `/api/v1/User/GetUserProfile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Quiz
     * @name QuizGetQuizzesByIndustry
     * @request GET:/api/v1/quiz/by-industry/{industryCode}
     * @secure
     */
    quizGetQuizzesByIndustry: (
      industryCode: string,
      params: RequestParams = {},
    ) =>
      this.request<QuizListResponse, any>({
        path: `/api/v1/quiz/by-industry/${industryCode}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Quiz
     * @name QuizGetQuizDetail
     * @request GET:/api/v1/quiz/{id}
     * @secure
     */
    quizGetQuizDetail: (id: number, params: RequestParams = {}) =>
      this.request<QuizDetailResponse, any>({
        path: `/api/v1/quiz/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Quiz
     * @name QuizGetAvailableIndustries
     * @request GET:/api/v1/quiz/industries
     * @secure
     */
    quizGetAvailableIndustries: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/api/v1/quiz/industries`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobGetJobs
     * @request GET:/api/v1/Job
     * @secure
     */
    jobGetJobs: (params: RequestParams = {}) =>
      this.request<JobListResponse, any>({
        path: `/api/v1/Job`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobGetJob
     * @request GET:/api/v1/Job/{id}
     * @secure
     */
    jobGetJob: (id: number, params: RequestParams = {}) =>
      this.request<JobDetailResponse, any>({
        path: `/api/v1/Job/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobInsertJob
     * @request POST:/api/v1/Job/InsertJob
     * @secure
     */
    jobInsertJob: (data: JobCreateRequest, params: RequestParams = {}) =>
      this.request<JobDetailResponse, any>({
        path: `/api/v1/Job/InsertJob`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobApplyJob
     * @request POST:/api/v1/Job/ApplyJob
     * @secure
     */
    jobApplyJob: (
      data: JobApplicationCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<JobApplicationResponse, any>({
        path: `/api/v1/Job/ApplyJob`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AIFCareer
     * @name AifCareerTestBothFormats
     * @request POST:/api/AIFCareer/test-both-formats
     * @secure
     */
    aifCareerTestBothFormats: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/api/AIFCareer/test-both-formats`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AIFCareer
     * @name AifCareerTestParsing
     * @request POST:/api/AIFCareer/test-parsing
     * @secure
     */
    aifCareerTestParsing: (data: string, params: RequestParams = {}) =>
      this.request<ComprehensiveCareerGuidanceResponse, any>({
        path: `/api/AIFCareer/test-parsing`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AIFCareer
     * @name AifCareerTestResultFailJson
     * @request POST:/api/AIFCareer/test-resultfail-json
     * @secure
     */
    aifCareerTestResultFailJson: (params: RequestParams = {}) =>
      this.request<ComprehensiveCareerGuidanceResponse, any>({
        path: `/api/AIFCareer/test-resultfail-json`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AIFCareer
     * @name AifCareerCompleteCareerAnalysis
     * @request POST:/api/AIFCareer/complete-career-analysis
     * @secure
     */
    aifCareerCompleteCareerAnalysis: (
      data: CompleteCareerAssessmentRequest,
      params: RequestParams = {},
    ) =>
      this.request<ComprehensiveCareerGuidanceResponse, any>({
        path: `/api/AIFCareer/complete-career-analysis`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AiProcess
     * @name AiProcessGenerate
     * @request POST:/api/AiProcess/generate
     * @secure
     */
    aiProcessGenerate: (data: AIRequest, params: RequestParams = {}) =>
      this.request<AIResponse, any>({
        path: `/api/AiProcess/generate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  connect = {
    /**
     * No description
     *
     * @tags User
     * @name UserExchange
     * @request POST:/connect/token
     * @secure
     */
    userExchange: (
      data: {
        Email?: string | null;
        Password?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/connect/token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
}
