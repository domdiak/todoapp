import { useState } from "react";
import { addTask } from "./fetcher";

const AddTask = ({ updateTasks, setError }) => {
    const [taskName, setTaskName] = useState("");

    const handleChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { status, newTask, error } = await addTask(taskName);
        if (status === "success") {
            updateTasks(newTask);
            setError("");
        } else {
            setError(error);
        }
    };

    return (
        <div style={AddTaskStyle}>
            <h2> Component: AddTask</h2>
            <input value={taskName} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>
                {" "}
                Add Task{" "}
            </button>
        </div>
    );
};

export default AddTask;

const AddTaskStyle = {
    border: "1px solid black",
};
