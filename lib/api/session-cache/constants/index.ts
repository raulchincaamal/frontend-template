export const { TIMEOUT_SESSION_MINUTES } = process.env
export const { PREFIX_LOGIN } = process.env

export const GET_USER_DATA_SESSION =
  process.env.REDIS_GET_USER_DATA_SESSION ?? ""

export const GET_USER_STORE = `${PREFIX_LOGIN}:${GET_USER_DATA_SESSION}`

export const REDIS_GET_USER_APPS_PERMISSIONS = `${process.env.APP_LOGS_NAME}:${process.env.REDIS_GET_USER_APPS_PERMISSIONS}`
