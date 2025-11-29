import { getServerSession } from "@/lib/server"
import type { PageProps } from "@/lib/server/types"
import { redirect } from "next/navigation"

const withSession = (Component: React.ComponentType<PageProps>) => {
  const WithSession = async (props: PageProps) => {
    const session = await getServerSession()
    if (!session) {
      redirect("/401")
    }
    return <Component {...props} />
  }

  WithSession.displayName = `WithSession(${Component.displayName || Component.name || "Component"})`

  return WithSession
}

export default withSession
