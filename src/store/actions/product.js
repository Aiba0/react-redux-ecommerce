import UserService from '../../services/user.service'
import {
    ADD_PRODUCT_CART,
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_PRODUCTS_SUCCESS,
    SEACRH_PRODUCT_SUCCESS
} from "./actionTypes";


export function fetchCategories() {
    return async (dispatch) => {
        try {
            let categories = [];
            const response = await UserService.getCategories()
            categories = response.data;
           dispatch(fetchCategoriesSuccess(categories))
        } catch (e) {
            dispatch(fetchCategoriesError(e))
        }
    }
}

export function fetchProductsById(id) {
    return async (dispatch) => {
        try {
            const response = await UserService.getProductsById(id)
            dispatch(fetchProductsSuccess(response.data))
        } catch (e) {
            console.log('e: ', e)
        }
    }
}


export function searchProductByName(value) {
    return async (dispatch) => {
        try {
            const response = await UserService.getProductByName(value)
            console.log(response.data)
            dispatch(searchProductSuccess(response.data))
        } catch (e) {
            console.log('e', e)
        }
    }
}


export function fetchCategoriesSuccess(categories) {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        categories
    }
}

export function fetchCategoriesError(e) {
    return {
        type: FETCH_CATEGORIES_ERROR,
        error: e
    }
}

export function fetchProductsSuccess(products) {

    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products
    }
}


export function searchProductSuccess(value) {
    return {
        type: SEACRH_PRODUCT_SUCCESS,
        productByName: value
    }
}




