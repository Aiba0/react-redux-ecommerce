import {ADD_PRODUCT_CART} from "../actions/actionTypes";

const initialState = {
    cart: [],
    cartNumber: 0,
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            return {
                cart: action.cart,
                cartNumber:  state.cartNumber + 1
            }
        default: return state
    }
}
