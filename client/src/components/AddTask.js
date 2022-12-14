import { useState } from "react";
import { addTask } from "../fetcher";
import { PlusIcon } from "@heroicons/react/solid";

const AddTask = ({ handleAddNewTask, setError }) => {
    const [taskName, setTaskName] = useState("");

    const handleTaskName = (e) => {
        setTaskName(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const { status, newTask, error } = await addTask(taskName);
        if (status === "success") {
            handleAddNewTask(newTask);
            setError("");
            setTaskName("");
        } else {
            setError(error);
        }
    };

    return (
        <div className="bg-blue3 p-2 m-2 flex items-center justify-between rounded-md ">
            <input
                type="text"
                value={taskName}
                placeholder="What do you need to do?"
                onChange={handleTaskName}
                className="w-3/4 border-none focus:bg-white2 rounded-lg shadow-md focus:outline-none focus:ring-0 cursor-pointer "
            />
            <button
                type="submit"
                onClick={onSubmit}
                className="w-1/5 h-10 bg-blue2 enabled:hover:bg-blue1 text-gray-800  rounded shadow-lg borderColor flex justify-center items-center disabled:opacity-25"
                disabled={!taskName}
            >
                {" "}
                <PlusIcon className="h-5 w-5 " />
                Add
            </button>
        </div>
    );
};

export default AddTask;
