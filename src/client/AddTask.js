import { useState } from "react";
import { addTask } from "./fetcher";

const NewTaskInput = () => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
    };

    return (
        <div style={AddTaskStyle}>
            <h2> Component: AddTask</h2>
            <input value={input} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>
                {" "}
                Add Task{" "}
            </button>
        </div>
    );
};

export default NewTaskInput;

const AddTaskStyle = {
    border: "1px solid black",
};
