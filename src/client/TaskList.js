import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
    return (
        <div style={TaskListStyle}>
            <h1> Component: TaskList</h1>
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;

const TaskListStyle = {
    border: "1px solid black",
};
