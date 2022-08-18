import NewTaskInput from "./AddTask";
import TaskList from "./TaskList";
import { useEffect, useState } from "react";
// import {
//     getTasks,
//     addTask,
//     updateTask,
//     deleteTask,
// } from "./services/taskServices";
import { getTasks } from "./fetcher";

const MainInterface = () => {
    const [tasks, setTasks] = useState([]);

    const fetchData = async () => {
        const tasks = await getTasks();
        setTasks(tasks);
    };
    useEffect(() => {
        fetchData();
    }, []);

    // const addTask = () => {
    //     // make a post request adding the task to the database
    //     // updated the state with new task
    // };

    return (
        <div style={MainInterfaceStyle}>
            <h1> Component: Main Interface</h1>
            <NewTaskInput />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default MainInterface;

const MainInterfaceStyle = {
    border: "1px solid black",
    height: "90vh",
};
