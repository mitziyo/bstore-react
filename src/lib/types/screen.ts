/** REACT APP STATE **/

import type { Member } from "./member";
import type { Product } from "./product";

// screen component based type integration / target oriented
export interface AppRootState {
  homePage: HomePageState;
}

/** HOMEPAGE **/
export interface HomePageState {
  popularBooks: Product[];
  newBooks: Product[];
  topUsers: Member[];
}

/** SHOP PAGE **/

/** ORDERS PAGE **/
