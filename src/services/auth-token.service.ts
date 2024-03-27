import Cookies from 'js-cookie'

export enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken'
}

class AuthTokenService {
  getAccessTokenFromCookies() {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

    return accessToken || null
  }

  saveTokenToCookies(accessToken: string) {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
      domain: 'localhost',
      sameSite: 'strict',
      expires: 1
    })
  }

  removeTokenFromCookies() {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
  }
}

export const AUTH_TOKEN_SERVICE = new AuthTokenService()
