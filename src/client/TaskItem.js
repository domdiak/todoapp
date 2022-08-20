import { TrashIcon, PencilIcon, CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { updateTaskTitle } from "./fetcher";

const TaskItem = ({
    task,
    handleDelete,
    handleIsCompleted,
    handleUpdateTaskTitle,
}) => {
    const [isEditable, setIsEditable] = useState(false);
    const [title, setTitle] = useState(task.title);

    const handleEdit = () => {
        const { _id } = task;
        if (isEditable) {
            updateTaskTitle(_id, title);
        }
        setIsEditable(!isEditable);
        handleUpdateTaskTitle(_id, title);
    };

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <div className="rounded-2xl bg-blue2 p-2 m-2 flex items-center justify-between">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleIsCompleted(task)}
                className="h-7 w-7 border-white2 text-green1 focus:border-white2 focus:ring-0 transition duration-200 rounded-full my-1 mx-2"
            />
            <div className="flex w-full items-center justify-between">
                {isEditable ? (
                    <input value={title} onChange={handleChange} />
                ) : (
                    <h2 style={task.completed ? crossOutStyle : {}}>
                        {" "}
                        {task.title}{" "}
                    </h2>
                )}
                <div>
                    <button
                        className="bg-white2 hover:bg-blue1 text-gray-800 m-1 py-1 px-3 rounded shadow-lg borderColor "
                        onClick={handleEdit}
                    >
                        {isEditable ? (
                            <CheckIcon className="h-4 w-4" />
                        ) : (
                            <PencilIcon className="h-4 w-4" />
                        )}
                    </button>
                    <button
                        onClick={() => handleDelete(task._id)}
                        className="bg-white2 hover:bg-blue1 text-gray-800 m-1 py-1 px-3 rounded shadow-lg"
                    >
                        {" "}
                        <TrashIcon className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;

const crossOutStyle = {
    textDecoration: "line-through",
};
