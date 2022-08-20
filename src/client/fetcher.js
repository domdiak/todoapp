import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export const getTasks = async () => {
    try {
        const res = await axios.get(apiUrl);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const getFilteredTasks = async (hideCompleted) => {
    const params = {
        completed: !hideCompleted,
    };

    try {
        const res = await axios.get(apiUrl, { params });
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const addTask = async (title) => {
    try {
        const { data } = await axios.post(apiUrl, { title });
        return { status: "success", newTask: data };
    } catch (error) {
        // console.error(error);
        return { error: "Network error" };
    }
};

export const deleteTask = async (id) => {
    try {
        const res = await axios.delete(apiUrl + "/" + id);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateTask = async (task) => {
    console.log("task in fetcher", task);
    const { _id } = task;
    try {
        const res = await axios.put(apiUrl + "/" + _id, task);
        console.log("res.data", res.data);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};
export const updateTaskTitle = async (id, title) => {
    try {
        const res = await axios.put(apiUrl + "/" + id, { title });
        return res.data;
    } catch (error) {
        console.error(error);
    }
};
