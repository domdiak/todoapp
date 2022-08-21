import AddTask from "./AddTask";
import TaskList from "./TaskList";
import FilterBar from "./FilterBar";
import ErrorHandler from "./ErrorHandler";
import { useEffect, useState } from "react";

import { getTasks } from "./fetcher";

const MainInterface = () => {
    const [tasks, setTasks] = useState([]);
    const [hideCompleted, setHideCompleted] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const fetchTasks = async (hideCompleted) => {
        const { tasks, status, error } = await getTasks(hideCompleted);

        if (status === "success") {
            setTasks(tasks);
            setIsLoading(false);
        } else {
            setError(error);
        }
    };

    useEffect(() => {
        fetchTasks(hideCompleted);
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

    const handleComplete = async (task) => {
        let newTasks;
        newTasks = tasks.map((item) => {
            if (item._id === task._id) {
                return task;
            }
            return item;
        });

        if (hideCompleted) {
            newTasks = newTasks.filter((item) => {
                return item.completed !== hideCompleted;
            });
        }

        setTasks(newTasks);
    };

    return (
        <div className="h-screen flex flex-col items-center px-5 py-2">
            {isLoading && <h1> Is Loading</h1>}
            <div className="w-1/3 md:w-1/2 sm:w-2/3">
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
                    handleComplete={handleComplete}
                    handleUpdateTaskTitle={handleUpdateTaskTitle}
                />
                {error && <ErrorHandler error={error} />}
            </div>
        </div>
    );
};

export default MainInterface;
