import { MainLayout } from "@/components/layout"
import { SessionProvider } from "@/components/providers"
import { REFETCH_INTERVAL } from "@/constants"
import { getServerSession } from "@/lib/server"

const ProtectedLayout = async ({ children }: LayoutProps<"/">) => {
  const session = await getServerSession()

  return (
    <SessionProvider session={session} refetchInterval={REFETCH_INTERVAL}>
      <MainLayout>{children}</MainLayout>
    </SessionProvider>
  )
}

export default ProtectedLayout
