import Cookies from 'js-cookie'

export enum EnumTokens {
  AccessToken = 'accessToken',
  RefreshToken = 'refreshToken'
}

export const authTokenService = {
  getAccessTokenFromCookies: () => {
    const accessToken = Cookies.get(EnumTokens.AccessToken)

    return accessToken || null
  },

  saveTokenToCookies: (accessToken: string) => {
    console.log(accessToken)
    Cookies.set(EnumTokens.AccessToken, accessToken, {
      domain: 'localhost',
      sameSite: 'strict',
      expires: 1
    })
  },

  removeTokenFromCookies() {
    Cookies.remove(EnumTokens.AccessToken)
  }
}
