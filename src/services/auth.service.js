import axios from "axios";

const API_URL = 'https://api.doover.tech/api/token/';

    class AuthService {
        login(username, password) {
            axios.post(API_URL, {"email": username, "password": password})
                .then((response) => {
                    if (response.data.access) {
                        localStorage.setItem('user', JSON.stringify(response.data))
                    }
                    return response.data
                })
        }
        logout() {
            localStorage.removeItem('user')
        }
}
export default new AuthService();
