const TaskItem = ({ task }) => {
    return (
        <div style={TaskItemStyle}>
            <h2> Task Title: {task.title} </h2>
            <button> Checkbox </button>
            <button>Edit </button>
            <button> Delete </button>
        </div>
    );
};

export default TaskItem;

const TaskItemStyle = {
    border: "1px solid black",
};
