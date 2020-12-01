import axios from "axios";
import AuthHeader from "./ auth-header";

const API_URL = 'https://api.doover.tech/api/'

class UserService  {

    getUserBoard() {
        return axios.get(`${API_URL}users/me`, {headers: AuthHeader()})
    }

    getCategories() {
        return  axios.get(`${API_URL}products/categories/`, {'headers': AuthHeader()})
    }

    getProductsById(id) {
        return  axios.get(`${API_URL}products/?categories=${id}`, {'headers': AuthHeader()})
    }

    getProductByName(value) {
        return axios.get(`${API_URL}products/?search=${value}`, {'headers': AuthHeader()})
    }
}

export default new UserService();
