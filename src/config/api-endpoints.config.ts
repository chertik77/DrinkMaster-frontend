export enum ApiEndpoints {
  Signup = '/auth/signup',
  Signin = '/auth/signin',
  Tokens = '/auth/signin/access-token',
  Signout = '/auth/signout',

  User = '/user',
  UserProfile = '/user/profile',
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
