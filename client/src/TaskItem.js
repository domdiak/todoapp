import { TrashIcon, PencilIcon, CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { deleteTask, updateTask, updateTaskTitle } from "./fetcher";

const TaskItem = ({
    task,
    setError,
    handleIsCompleted,
    handleUpdateTaskTitle,
    handleDeleteTask,
}) => {
    const [isEditable, setIsEditable] = useState(false);
    const [title, setTitle] = useState(task.title);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const toggleIsEditable = () => setIsEditable(!isEditable);

    const onEdit = async () => {
        const { _id } = task;
        if (!title) {
            return setError("Field cannot be empty");
        }
        if (isEditable) {
            console.log("id", _id);
            console.log("title", title);
            const { status, updatedTask, error } = await updateTaskTitle(
                _id,
                title
            );
            console.log("updatedTask", updatedTask);
            if (status === "success") {
                handleUpdateTaskTitle(updatedTask);
                setError("");
            } else {
                setError(error);
            }
        }
        toggleIsEditable();
    };

    const onDelete = async () => {
        const { _id } = task;
        const { status, deletedTask, error } = await deleteTask(_id);

        if (status === "success") {
            handleDeleteTask(deletedTask);
            setError("");
        } else {
            setError(error);
        }
    };

    const onIsCompleted = async () => {
        const newTask = { ...task, completed: !task.completed };
        const { status, error, updatedTask } = await updateTask(newTask);

        if (status === "success") {
            handleIsCompleted(updatedTask);
            setError("");
        } else {
            setError(error);
        }
    };

    return (
        <div className="rounded-2xl bg-blue2 p-2 m-2 flex items-center justify-between">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={onIsCompleted}
                className="h-7 w-7 border-white2 text-green1 focus:border-white2 focus:ring-0 transition duration-200 rounded-full my-1 mx-2"
            />
            <div className="flex w-full items-center justify-between">
                {isEditable ? (
                    <input value={title} onChange={handleTitle} />
                ) : (
                    <h2 style={task.completed ? crossOutStyle : {}}>
                        {" "}
                        {task.title}{" "}
                    </h2>
                )}
                <div>
                    <button
                        className="bg-white2 hover:bg-blue1 text-gray-800 m-1 py-1 px-3 rounded shadow-lg borderColor "
                        onClick={onEdit}
                    >
                        {isEditable ? (
                            <CheckIcon className="h-4 w-4" />
                        ) : (
                            <PencilIcon className="h-4 w-4" />
                        )}
                    </button>
                    <button
                        onClick={onDelete}
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
