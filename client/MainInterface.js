import AddTask from "./AddTask";
import TaskList from "./src/TaskList";
import FilterBar from "./FilterBar";
import ErrorHandler from "./ErrorHandler";
import { useEffect, useState } from "react";

import { getTasks } from "./fetcher";

const MainInterface = () => {
    const [tasks, setTasks] = useState([]);
    const [hideCompleted, setHideCompleted] = useState(false);
    const [error, setError] = useState("");

    const fetchTasks = async (hideCompleted) => {
        const tasks = await getTasks(hideCompleted);
        setTasks(tasks);
    };

    useEffect(() => {
        if (hideCompleted) {
            fetchTasks(hideCompleted);
        } else {
            fetchTasks();
        }
    }, [hideCompleted]);

    const toggleHideCompleted = () => setHideCompleted(!hideCompleted);

    const handleAddNewTask = (task) => {
        const newTasks = [...tasks];
        newTasks.push(task);
        setTasks(newTasks);
    };

    const handleUpdateTaskTitle = (task) => {
        const newTasks = tasks.map((item) => {
            if (task._id === item._id) {
                return { ...item, title: task.title };
            }
            return item;
        });
        setTasks(newTasks);
    };

    const handleDeleteTask = async (task) => {
        const newTasks = tasks.filter((item) => {
            return item._id !== task._id;
        });
        setTasks(newTasks);
    };

    const handleIsCompleted = async (task) => {
        const newTasks = tasks.map((item) => {
            if (item._id === task._id) {
                return task;
            }
            return item;
        });
        setTasks(newTasks);
    };

    return (
        <div className="h-screen flex flex-col items-center px-5 py-2">
            {error && <ErrorHandler error={error} />}
            <div className="w-1/3">
                <FilterBar
                    hideCompleted={hideCompleted}
                    toggleFilter={toggleHideCompleted}
                />
                <AddTask
                    handleAddNewTask={handleAddNewTask}
                    setError={setError}
                />
                <TaskList
                    tasks={tasks}
                    setError={setError}
                    handleDeleteTask={handleDeleteTask}
                    handleIsCompleted={handleIsCompleted}
                    handleUpdateTaskTitle={handleUpdateTaskTitle}
                />
            </div>
        </div>
    );
};

export default MainInterface;
