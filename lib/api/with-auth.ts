import { CustomLogger } from "mp-front-cli/core/logger"
import { getServerSession } from "@/lib/server"
import type { ApiMiddleware } from "mp-front-cli/core"

type MiddlewareHandler = (req: Request) => Promise<Response>

export const withAuth = <TRes, TData>(
  handler: MiddlewareHandler,
  api: ApiMiddleware<TRes, TData>
): MiddlewareHandler => {
  const logger = new CustomLogger()
  return async (req: Request) => {
    logger.logDebug("withAuth Middleware", req.url)
    const session = await getServerSession()
    logger.logDebug("Token Front", JSON.stringify(session))
    if (!session) {
      const error = new Error("UNAUTHORIZED")
      return Response.json(error, { status: 401 })
    }

    api.setSession(session)
    return handler(req)
  }
}
