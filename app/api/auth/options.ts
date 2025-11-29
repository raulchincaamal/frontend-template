import {
  AZURE_AD_CLIENT_ID,
  AZURE_AD_CLIENT_SECRET,
  AZURE_AD_TENANT_ID,
  SESSION_TOKEN,
  TIMEOUT_SESSION_MINUTES,
} from "@/constants"
import { SessionCacheHandler } from "@/lib/api"
import { IORedisAdapter } from "mp-front-cli/core/adapter"
import { CustomLogger } from "mp-front-cli/core/logger"
import type { NextAuthOptions } from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad"

const logger = new CustomLogger()
export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: AZURE_AD_CLIENT_ID,
      clientSecret: AZURE_AD_CLIENT_SECRET,
      tenantId: AZURE_AD_TENANT_ID,
    }),
  ],

  adapter: IORedisAdapter({
    expire: TIMEOUT_SESSION_MINUTES * 60,
  }),

  session: {
    strategy: "database",
    maxAge: TIMEOUT_SESSION_MINUTES * 60, // 60 * 60 para 1 hours
  },

  cookies: {
    sessionToken: {
      name: SESSION_TOKEN,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
  },

  pages: {
    signIn: "",
    error: "",
    signOut: "",
  },

  callbacks: {
    async signIn({ profile, user }) {
      try {
        if (profile && user) {
          logger.logInfo(`SIGN IN: ${user.name}`)
          return true
        }
      } catch {
        return false
      }
      return false
    },

    async session({ session, user }) {
      const sessionCacheHandler = new SessionCacheHandler(user.id)

      const sessionData = await sessionCacheHandler.getBasicSession()

      return {
        ...session,
        ...sessionData,
        expires: session.expires,
      }
    },
  },

  debug: false,
}
