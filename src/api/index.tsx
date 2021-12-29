
import AuthService from "./auth.api";
import TaskService from "./task.api"

const endpoint = process.env.REACT_APP_SERVICE_URI ? process.env.REACT_APP_SERVICE_URI : 'http://localhost:8000'
 
export const AuthAPI = new AuthService(endpoint)

export const TaskAPI = new TaskService(endpoint)