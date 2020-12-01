import {
    ADD_PRODUCT_CART,
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_PRODUCTS_SUCCESS,
    SEACRH_PRODUCT_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    categories: [],
    error: null,
    products: [],
    productByName: [],
    cart: []
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state, products: action.products
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state, categories: action.categories
        };
        case FETCH_CATEGORIES_ERROR:
            return {
                ...state, error: action.e
            };
        case SEACRH_PRODUCT_SUCCESS:
            return {
                ...state, productByName: action.productByName
            };
        default: return state
    }

}

