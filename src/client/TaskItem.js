// import { useState } from "react";

const TaskItem = ({ task, handleDelete, handleIsCompleted }) => {
    // const [isCompleted, setIsCompleted] = useState(false);

    // const toggleIsCompleted = (id) => {
    //     setIsCompleted(!isCompleted);
    //     handleIsCompleted(id);
    // };

    return (
        <div style={TaskItemStyle}>
            <h2> Task Title: {task.title} </h2>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleIsCompleted(task)}
            />
            <button>Edit </button>
            <button onClick={() => handleDelete(task._id)}> Delete </button>
        </div>
    );
};

export default TaskItem;

const TaskItemStyle = {
    border: "1px solid black",
};
