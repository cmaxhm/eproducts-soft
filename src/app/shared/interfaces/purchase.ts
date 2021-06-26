import { User } from "./user";
import { Product } from "./product";

export interface Purchase {
  user: User,
  cart: Product[]
}
