import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export const getTasks = async (hideCompleted = "") => {
    let params;

    if (hideCompleted) {
        params = {
            completed: !hideCompleted,
        };
    }

    try {
        const { data } = await axios.get(apiUrl, { params });
        return { status: "success", tasks: data };
    } catch (error) {
        return { error: `Network error` };
    }
};

export const addTask = async (title) => {
    try {
        const { data } = await axios.post(apiUrl, { title });
        return { status: "success", newTask: data };
    } catch (error) {
        return { error: `Network error` };
    }
};

export const deleteTask = async (id) => {
    try {
        const { data } = await axios.delete(apiUrl + "/" + id);
        return { status: "success", deletedTask: data };
    } catch (error) {
        return { error: `Network error` };
    }
};

export const updateTask = async (task) => {
    const { _id } = task;
    try {
        const { data } = await axios.put(apiUrl + "/" + _id, task);
        return { status: "success", updatedTask: data };
    } catch (error) {
        return { error: "Network error" };
    }
};
