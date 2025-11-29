import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Frontend Template",
  description: "Frontend Template",
}

const RootLayout = async ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
