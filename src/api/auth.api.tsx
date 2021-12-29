import axios from "axios"
import { stringify } from "query-string"

class AuthService {
    API_URL: string;

    constructor(url: string) {
        this.API_URL = url + "/api/user";
    }

    login(email: string, password: string) {
        const config = { headers: { "Content-Type": "application/x-www-form-urlencoded" }}
        const data = { email, password }
        return axios.post(this.API_URL + "/login", stringify(data), config)
        .then(response => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        })
    }

    logout() {
        localStorage.removeItem("user");
    }
    register(name: string, email: string, password: string) {
        const config = { headers: { "Content-Type": "application/x-www-form-urlencoded" }}
        const data = {
            name,
            email,
            password,
        }
        return axios.post(this.API_URL + "/register", stringify(data), config);
    }

}

export default AuthService