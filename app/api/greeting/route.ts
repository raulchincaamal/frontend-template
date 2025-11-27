// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  return new Response(`Greeting ${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}`)
}
