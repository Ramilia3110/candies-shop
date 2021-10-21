import { combineReducers } from "redux";
import userReducer from "./User/user.reducer";
import productsReducer from "./Products/products.reducer";
import cartReducer from "./Cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  productsList: productsReducer,
  cartData: cartReducer,
});

export default rootReducer;
