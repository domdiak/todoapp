import AddTask from "./AddTask";
import TaskList from "./TaskList";
import FilterBar from "./FilterBar";
import { useEffect, useState } from "react";

import { getTasks, deleteTask, updateTask, getFilteredTasks } from "./fetcher";

const MainInterface = () => {
    const [tasks, setTasks] = useState([]);
    const [hideCompleted, setHideCompleted] = useState(false);
    const [error, setError] = useState("");

    const fetchTasks = async () => {
        const tasks = await getTasks();
        setTasks(tasks);
    };

    const fetchFilteredTasks = async (hideCompleted) => {
        const filteredTasks = await getFilteredTasks(hideCompleted);
        setTasks(filteredTasks);
    };

    useEffect(() => {
        if (hideCompleted) {
            fetchFilteredTasks(hideCompleted);
        } else {
            fetchTasks();
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
                return { ...item, completed: !item.completed };
            }
            return item;
        });

        const updatedTask = newTasks.find((item) => item._id === task._id);
        setTasks(newTasks);

        await updateTask(updatedTask);
    };

    return (
        <div className="h-screen flex flex-col items-center px-5 py-2">
            {error && <div>{error}</div>}
            <div className="w-1/3">
                <FilterBar
                    hideCompleted={hideCompleted}
                    toggleFilter={toggleHideCompleted}
                />
                <AddTask updateTasks={updateTasks} setError={setError} />
                <TaskList
                    tasks={tasks}
                    handleDeleteTask={handleDeleteTask}
                    handleIsCompleted={handleIsCompleted}
                    handleUpdateTaskTitle={handleUpdateTaskTitle}
                />
            </div>
        </div>
    );
};

export default MainInterface;
