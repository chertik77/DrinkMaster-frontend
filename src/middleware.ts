import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

import { Pages } from './config'
import { EnumTokens } from './services'

export async function middleware({
  url,
  cookies,
  nextUrl: { pathname }
}: NextRequest) {
  const refreshToken = cookies.get(EnumTokens.RefreshToken)?.value

  const isPublicOnlyRoute =
    pathname === Pages.Signin ||
    pathname === Pages.Signup ||
    pathname === Pages.Home

  if (isPublicOnlyRoute && refreshToken) {
    return NextResponse.redirect(new URL(Pages.Dashboard, url))
  }

  if (isPublicOnlyRoute) {
    return NextResponse.next()
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL(Pages.Home, url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/signup', '/signin', '/dashboard/:path*']
}
