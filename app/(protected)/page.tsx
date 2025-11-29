import { BASE_PATH } from "@/constants"
import { withSession } from "@/lib/server"

const Page = () => {
  return <div>Welcome to {BASE_PATH}</div>
}

export default withSession(Page)
