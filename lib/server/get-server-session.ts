import { authOptions } from "@/app/api/auth/options"
import { getServerSession as getServerSessionFn } from "next-auth"

export const getServerSession = async () => getServerSessionFn(authOptions)
