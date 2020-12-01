import {combineReducers} from "redux";
import productReducer from "./products";
import messageReducer from "./message";
import {authReducer} from "./auth";
import {cartReducer} from "./cart";

export default combineReducers({
    product: productReducer,
    message: messageReducer,
    auth: authReducer,
    cart: cartReducer,

})
