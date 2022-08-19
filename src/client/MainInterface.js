import NewTaskInput from "./NewTaskInput";
import TaskList from "./TaskList";
import FilterBar from "./FilterBar";
import { useEffect, useState, useRef } from "react";

import { getTasks, deleteTask, updateTask, getFilteredTasks } from "./fetcher";

const MainInterface = () => {
    const [tasks, setTasks] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const isMounted = useRef(false);

    const fetchData = async () => {
        const tasks = await getTasks();
        setTasks(tasks);
    };
    useEffect(() => {
        fetchData();
    }, []);

    const fetchFilteredData = async (showCompleted) => {
        console.log("fetchFilteredData");
        const filteredTasks = await getFilteredTasks(showCompleted);
        setTasks(filteredTasks);
    };

    useEffect(() => {
        if (isMounted.current) {
            console.log("isMounted.current", isMounted.current);
            fetchFilteredData(showCompleted);
        } else {
            isMounted.current = true;
        }
    }, [showCompleted]);

    const updateTasks = (newTask) => {
        const newTasks = [...tasks];
        newTasks.push(newTask);
        setTasks(newTasks);
    };

    const toggleFilterCompleted = () => {
        setShowCompleted(!showCompleted);
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
        <div style={MainInterfaceStyle}>
            <h1> Component: Main Interface</h1>
            <NewTaskInput updateTasks={updateTasks} />
            <FilterBar
                showCompleted={showCompleted}
                toggleFilter={toggleFilterCompleted}
            />
            <TaskList
                tasks={tasks}
                handleDelete={handleDeleteTask}
                handleIsCompleted={handleIsCompleted}
            />
        </div>
    );
};

export default MainInterface;

const MainInterfaceStyle = {
    border: "1px solid black",
    height: "90vh",
};
