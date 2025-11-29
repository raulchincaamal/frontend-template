namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXT_PUBLIC_APP_LOGS_NAME: string
    NEXT_PUBLIC_LOGS_LEVEL: string
    NEXT_PUBLIC_SILENT_LOGS: string
    NEXT_TELEMETRY_DISABLED: number

    NEXTAUTH_SECRET: string
    TIMEOUT_SESSION_MINUTES: number

    AZURE_AD_CLIENT_ID: string
    AZURE_AD_TENANT_ID: string
    AZURE_AD_CLIENT_SECRET: string
    URL_AZURE_AD_LOGOUT: string
    AZURE_AD_CLIENT_RESOURCE: string
    AZURE_AD_CLIENT_GRANT_TYPE: string
    AZURE_AD_GRAPH_URL_TOKEN: string
    AZURE_AD_GRAPH_GROUPS: string
    AZURE_AD_GRAPH_GET_USER_BY_EMAIL: string

    NODE_ENV: string

    API_AUTH_BACK_URL: string
    API_AUTH_BACK_USERNAME_AUTH: string
    API_AUTH_BACK_PASSWORD_AUTH: string
    API_AUTH_BACK_USER: string
    API_AUTH_BACK_SCOPE: string
    API_AUTH_BACK_PASSWORD: string

    URL_REDIRECT_LOGIN: string
    NEXT_PUBLIC_REDIRECT_MENU: string
    NEXT_PUBLIC_BASE_PATH: string

    REDIS_HOST: string
    REDIS_PORT: number
    REDIS_PASS: string

    SECRET_SIGNATURE: string

    NEXT_PUBLIC_DOMAIN_URL: string
    NEXT_PUBLIC_REDIRECT_LOGIN: string

    PREFIX_LOGIN: string
    SESSION_TOKEN: string
    ID_FRONT: string
  }
}
