import AuthService from "../../services/auth.service";
import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "./actionTypes";


export function login(username, password) {
    return async (dispatch) => {
        try {
            const data = await AuthService.login(username, password)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {user: data}
            })
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            dispatch({
                type: LOGIN_FAIL,
                payload: message
            })
        }
    }
}

export function logout() {
    AuthService.logout()
    return (dispath) => {
        dispath({
            type: LOGOUT
        })
    }

}


// export const login = (username, password) => async (dispatch) => {


    // return AuthService.login(username, password).then(data => {
    //     dispatch({
    //         type: LOGIN_SUCCESS,
    //         payload: {user: data}
    //     })
    //     return Promise.resolve()
    // })
// }
