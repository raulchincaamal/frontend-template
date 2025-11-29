import { CustomCache } from "mp-front-cli/core/cache"
import type { Session } from "next-auth"
import { GET_USER_STORE, PREFIX_LOGIN } from "@/lib/api/session-cache/constants"
import type { IResponseCacheData } from "@/lib/api/session-cache/types"
import { TIMEOUT_SESSION_MINUTES } from "@/constants/environments"

const customCache = new CustomCache()

export class SessionCacheHandler {
  private readonly userId: string = ""
  private accountId: string = ""

  constructor(userId: string) {
    this.userId = userId
  }

  async updateSessionTimeout(
    currentTime: string | null,
    sessionTokenSha: string,
    EXPIRES_TAG: string
  ) {
    const MILLISECONDS = 60000
    if (!currentTime) return
    const time = new Date()
    const addTime = TIMEOUT_SESSION_MINUTES * MILLISECONDS
    const newTime = new Date(time.getTime() + addTime)
    customCache.simpleHSet(sessionTokenSha, EXPIRES_TAG, newTime.toISOString())
  }

  async getBasicSession() {
    const EXPIRES_TAG = "expires"
    const sessionTokenSha =
      (await customCache.simpleGet(
        `${PREFIX_LOGIN}:session:user:${this.userId}`
      )) ?? ""

    const existToken = await customCache.simpleHGet(
      sessionTokenSha,
      "sessionToken"
    )

    const sessionUserEmail =
      (await customCache.simpleHGet(
        `${PREFIX_LOGIN}:user:${this.userId}`,
        "email"
      )) ?? ""

    const account =
      (await customCache.simpleGet(
        `${PREFIX_LOGIN}:account:user:${this.userId}`
      )) ?? ""

    const accountAzure =
      (await customCache.simpleHGet(account, "providerAccountId")) ?? ""

    const expiresSession = await customCache.simpleHGet(
      sessionTokenSha,
      EXPIRES_TAG
    )

    this.updateSessionTimeout(expiresSession, sessionTokenSha, EXPIRES_TAG)

    this.accountId = accountAzure

    if (existToken && sessionUserEmail && account && accountAzure) {
      const userName = await customCache.simpleHGet(
        `${PREFIX_LOGIN}:user:${this.userId}`,
        "name"
      )

      const userEmail =
        (await customCache.simpleHGet(
          `${PREFIX_LOGIN}:user:${this.userId}`,
          "email"
        )) ?? ""

      const userImage = await customCache.simpleHGet(
        `${PREFIX_LOGIN}:user:${this.userId}`,
        "image"
      )

      const userCveUsuario = await customCache.simpleHGet(
        `${account}`,
        "cveUsuario"
      )

      const userAzureGroups = await customCache.simpleHGet(
        `${account}`,
        "appGroups"
      )

      const userRol = await customCache.simpleHGet(`${account}`, "rol")

      const userGroups = userAzureGroups ? JSON.parse(userAzureGroups) : []

      return {
        user: {
          name: userName,
          email: userEmail,
          image: userImage,
          cveUsuario: userCveUsuario,
          rol: userRol,
          appGroups: userGroups,
        },
      }
    }
    return {
      user: {
        name: null,
        email: null,
        image: null,
      },
      expires: null,
    }
  }

  async getUserAndShoppingStore() {
    const basicSession = await this.getBasicSession()
    if (basicSession.user.image === null) {
      return basicSession
    }
    const cacheData: IResponseCacheData = await customCache.getRedisState(
      GET_USER_STORE,
      this.accountId
    )
    if (!cacheData.data.data) {
      return {
        user: {
          name: null,
          email: null,
          image: null,
        },
        expires: null,
      }
    }

    return {
      user: {
        ...basicSession.user,
        ...cacheData?.data?.data,
      },
    } as Session
  }
}
