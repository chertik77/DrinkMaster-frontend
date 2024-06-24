export enum ApiEndpoints {
  Signup = '/auth/signup',
  Signin = '/auth/signin',
  Tokens = '/auth/tokens',
  Signout = '/auth/signout',

  User = '/user',
  UserMe = '/user/me',
  UserSubscribtion = '/user/subscribe',

  Drinks = '/drinks',
  OwnDrinks = '/drinks/own',
  PopularDrinks = '/drinks/popular',
  AddOwnDrink = '/drinks/own/add',
  RemoveOwnDrink = '/drinks/own/remove',
  FavoriteDrinks = '/drinks/favorite',
  AddFavoriteDrink = '/drinks/favorite/add',
  RemoveFavoriteDrink = '/drinks/favorite/remove',

  Ingredients = '/ingredients',
  Glasses = '/glasses',
  Categories = '/categories'
}
