class Endpoints {
  SIGNUP = '/auth/signup'
  SIGNIN = '/auth/signin'
  'ACCESS-TOKEN' = '/auth/signin/access-token'
  SIGNOUT = '/auth/signout'

  USER = '/user'
  USER_SUBSCRIPTION = '/user/subscribe'

  DRINKS = '/drinks'
  OWN_DRINKS = '/drinks/own'
  POPULAR_DRINKS = '/drinks/popular'
  ADD_OWN_DRINK = '/drinks/own/add'
  REMOVE_OWN_DRINK = '/drinks/own/remove'
  FAVORITE_DRINKS = '/drinks/favorite'
  ADD_FAVORITE_DRINK = '/drinks/favorite/add'
  REMOVE_FAVORITE_DRINK = '/drinks/favorite/remove'

  INGREDIENTS = '/ingredients'
  GLASSES = '/glasses'
  CATEGORIES = '/categories'
}

export const API_ENDPOINTS = new Endpoints()
