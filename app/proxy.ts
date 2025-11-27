import { CSPHeaders } from "@/lib"
import type { NextProxy } from "next/server"

export const middleware: NextProxy = request => CSPHeaders(request)
