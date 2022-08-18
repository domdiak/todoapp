import axios from "axios";
const apiUrl = "/api/tasks";

export function getTasks() {
    return axios.get(apiUrl);
}
export function addTask(task) {
    return axios.get(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
