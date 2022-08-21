import { TrashIcon, PencilIcon, CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Editable from "./Editable";
import { deleteTask, updateTask } from "../fetcher";

const TaskItem = ({
    task,
    setError,
    handleComplete,
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
        if (!title) {
            return setError("Field cannot be empty");
        }
        if (isEditable) {
            const newUpdatedTask = { ...task, title };
            const { status, updatedTask, error } = await updateTask(
                newUpdatedTask
            );
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
        const newUpdatedTask = { ...task, completed: !task.completed };
        const { status, error, updatedTask } = await updateTask(newUpdatedTask);

        if (status === "success") {
            handleComplete(updatedTask);
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
                    <Editable handleTitle={handleTitle} title={title} />
                ) : (
                    <h2
                        className={`p-1 ${
                            task.completed ? "line-through" : ""
                        }`}
                    >
                        {task.title}
                    </h2>
                )}
                <div>
                    <button
                        className="bg-white2 hover:bg-blue1 text-gray-800 m-1 py-1 px-3 rounded shadow-lg "
                        onClick={onEdit}
                    >
                        {isEditable ? (
                            <CheckIcon className="icon-primary" />
                        ) : (
                            <PencilIcon className="icon-primary" />
                        )}
                    </button>
                    <button
                        onClick={onDelete}
                        className="bg-white2 hover:bg-blue1 text-gray-800 m-1 py-1 px-3 rounded shadow-lg"
                    >
                        {" "}
                        <TrashIcon className="icon-primary" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
