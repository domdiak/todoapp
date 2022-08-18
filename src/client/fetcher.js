import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export async function getTasks() {
    try {
        const res = await axios.get(apiUrl);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export async function addTask(task) {
    try {
        console.log("task in addTask fetcher", task);
        const res = await axios.post(apiUrl, { title: task });
        console.log("res.data", res);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

// export async function getTasks () {
//     try {

//     } catch (error) {

//     }
// }
