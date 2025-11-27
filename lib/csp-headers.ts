import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const CSPHeaders = (request: NextRequest) => {
  // Add a nonce to the CSP header
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64")

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${
      process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""
    };
    style-src 'self' 'unsafe-inline';
    script-src-elem 'self' 'unsafe-inline' https://static.zdassets.com/ https://ekr.zdassets.com/ https://api.smooch.io/;
    img-src 'self' data: https://static.zdassets.com/;
    connect-src 'self' https://static.zdassets.com/ https://ekr.zdassets.com/ https://gmsupport.zendesk.com https://api.smooch.io/ wss://api.smooch.io/;
    media-src 'self';
    frame-src 'none';
    manifest-src 'self';
    worker-src 'none';
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`
  const StrictTransportSecurity = "max-age=63072000"
  const XFrameOptions = "SAMEORIGIN"
  const XContentTypeOptions = "nosniff"
  const XXSSProtection = "1; mode=block"
  const ReferrerPolicy = "same-origin"
  const KeyPinningPolicy = "max-age=63072000; includeSubDomains; preload"
  const FeaturePolicy =
    "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'; sync-xhr 'self'"
  const PermissionsPolicy =
    "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()"
  const CrossOriginEmbedderPolicy = "same-origin"
  const CrossOriginRessourcePolicy = "same-site"
  const CrossOriginOpenerPolicy = "same-origin"

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim()

  // Add the CSP header to the request
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-nonce", nonce)
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  )
  // Add HSTS header to the request
  requestHeaders.set("Strict-Transport-Security", StrictTransportSecurity)
  // X-Frame-Options header
  requestHeaders.set("X-Frame-Options", XFrameOptions)
  // x-Content-Type-Options header
  requestHeaders.set("X-Content-Type-Options", XContentTypeOptions)
  // X-XSS-Protection header
  requestHeaders.set("X-XSS-Protection", XXSSProtection)
  // Referrer-Policy header
  requestHeaders.set("Referrer-Policy", ReferrerPolicy)
  // Key-Pinning-Policy header
  requestHeaders.set("Key-Pinning-Policy", KeyPinningPolicy)
  // Add Feature-Policy header
  requestHeaders.set("Feature-Policy", FeaturePolicy)
  // Add Permissions-Policy header
  requestHeaders.set("Permissions-Policy", PermissionsPolicy)
  // Add Croos-Origin-Embedder-Policy header
  requestHeaders.set("Cross-Origin-Embedder-Policy", CrossOriginEmbedderPolicy)
  // Add Cross-Origin-Ressource-Policy header
  requestHeaders.set(
    "Cross-Origin-Ressource-Policy",
    CrossOriginRessourcePolicy
  )
  // Add Cross-Origin-Opener-Policy header
  requestHeaders.set("Cross-Origin-Opener-Policy", CrossOriginOpenerPolicy)

  // Add Headers to the response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  )
  // Add HSTS header to the response
  response.headers.set("Strict-Transport-Security", StrictTransportSecurity)
  // X-Frame-Options header
  response.headers.set("X-Frame-Options", XFrameOptions)
  // x-Content-Type-Options header
  response.headers.set("X-Content-Type-Options", XContentTypeOptions)
  // X-XSS-Protection header
  response.headers.set("X-XSS-Protection", XXSSProtection)
  // Referrer-Policy header
  response.headers.set("Referrer-Policy", ReferrerPolicy)
  // Key-Pinning-Policy header
  response.headers.set("Key-Pinning-Policy", KeyPinningPolicy)
  // Add Feature-Policy header
  response.headers.set("Feature-Policy", FeaturePolicy)
  // Add Permissions-Policy header
  response.headers.set("Permissions-Policy", PermissionsPolicy)
  // Add Croos-Origin-Embedder-Policy header
  response.headers.set(
    "Cross-Origin-Embedder-Policy",
    CrossOriginEmbedderPolicy
  )
  // Add Cross-Origin-Ressource-Policy header
  response.headers.set(
    "Cross-Origin-Ressource-Policy",
    CrossOriginRessourcePolicy
  )
  // Add Cross-Origin-Opener-Policy header
  response.headers.set("Cross-Origin-Opener-Policy", CrossOriginOpenerPolicy)
  return response
}

export default CSPHeaders
