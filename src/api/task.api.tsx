import axios, { AxiosRequestHeaders } from 'axios';
import { stringify } from 'querystring';

function setHeader(): AxiosRequestHeaders {
    const user = JSON.parse(localStorage.getItem('user') || "{}");

    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}


class TaskService {

    API_URL: string;
    constructor(url: string) {
        this.API_URL = url + "/api/task/";
    }

    getTasks() {
        return axios.get(this.API_URL, { headers : setHeader() });
    } 

    createTask(data: any) {
        const config = { headers: { ...setHeader(), "Content-Type": "application/x-www-form-urlencoded" }}
        return axios.post(this.API_URL, stringify(data), config)
    }

    updateTasks(taskID: string, data: any) {
        const config = { headers: { ...setHeader(), "Content-Type": "application/x-www-form-urlencoded" }}
        return axios.put(this.API_URL + taskID, stringify(data), config)
    }

    deleteTask(taskID: string) {
        return axios.delete(this.API_URL + taskID, { headers: setHeader() });
    }
}

export default TaskService;