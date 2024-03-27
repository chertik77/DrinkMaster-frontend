import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

import { PAGES_URL } from './config/pages-url.config'
import { EnumTokens } from './services/auth-token.service'

export async function middleware({
  url,
  cookies,
  nextUrl: { pathname }
}: NextRequest) {
  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

  const isRestrictedRoute =
    pathname === PAGES_URL.SIGNIN ||
    pathname === PAGES_URL.SIGNUP ||
    pathname === PAGES_URL.ROOT

  if (isRestrictedRoute && refreshToken) {
    return NextResponse.redirect(new URL(PAGES_URL.DASHBOARD, url))
  }

  if (isRestrictedRoute) {
    return NextResponse.next()
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL(PAGES_URL.ROOT, url))
  }

  return NextResponse.next()
}

// const instance = new Pages()

// const pages = Object.values(instance)

export const config = {
  matcher: [
    '/',
    '/signup',
    '/signin',
    '/dashboard',
    '/drinks',
    '/add',
    '/favorites',
    '/my'
  ]
}
