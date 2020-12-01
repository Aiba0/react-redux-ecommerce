import {ADD_PRODUCT_CART} from "./actionTypes";

export function addToCart(product) {
    let cart = []
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    cart = JSON.parse(localStorage.getItem('cart'))
    localStorage.removeItem('cart')
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))

    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_CART,
            cart
        })
    }
}


