import AddTask from "./AddTask";
import TaskList from "./TaskList";
import FilterBar from "./FilterBar";
import { useEffect, useState } from "react";

import { getTasks, deleteTask, updateTask, getFilteredTasks } from "./fetcher";

const MainInterface = () => {
    const [tasks, setTasks] = useState([]);
    const [hideCompleted, setHideCompleted] = useState(false);
    const [error, setError] = useState("");

    const fetchGetTasks = async () => {
        const tasks = await getTasks();
        setTasks(tasks);
    };

    const fetchGetFilteredTasks = async (hideCompleted) => {
        const filteredTasks = await getFilteredTasks(hideCompleted);
        setTasks(filteredTasks);
    };

    useEffect(() => {
        if (hideCompleted) {
            fetchGetFilteredTasks(hideCompleted);
        } else {
            fetchGetTasks();
        }
    }, [hideCompleted]);

    const toggleHideCompleted = () => {
        setHideCompleted(!hideCompleted);
    };

    const updateTasks = (newTask) => {
        const newTasks = [...tasks];
        newTasks.push(newTask);
        setTasks(newTasks);
    };

    const handleDeleteTask = async (taskId) => {
        const newTasks = tasks.filter((item) => {
            return item._id !== taskId;
        });
        setTasks(newTasks);
        await deleteTask(taskId);
    };

    const handleIsCompleted = async (task) => {
        const newTasks = tasks.map((item) => {
            if (item._id === task._id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });

        const updatedTask = newTasks.find((item) => item._id === task._id);
        setTasks(newTasks);

        await updateTask(updatedTask);
    };

    return (
        <div className="h-screen flex flex-col  items-center p-5">
            <h1> Component: Main Interface</h1>
            {error && <div>{error}</div>}
            <div className="w-3/6">
                <FilterBar
                    hideCompleted={hideCompleted}
                    toggleFilter={toggleHideCompleted}
                />
                <AddTask updateTasks={updateTasks} setError={setError} />
                <TaskList
                    tasks={tasks}
                    handleDelete={handleDeleteTask}
                    handleIsCompleted={handleIsCompleted}
                />
            </div>
        </div>
    );
};

export default MainInterface;
