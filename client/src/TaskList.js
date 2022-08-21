import TaskItem from "./TaskItem";

const TaskList = ({
    tasks,
    setError,
    handleDeleteTask,
    handleComplete,
    handleUpdateTaskTitle,
}) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    setError={setError}
                    handleDeleteTask={handleDeleteTask}
                    handleComplete={handleComplete}
                    handleUpdateTaskTitle={handleUpdateTaskTitle}
                />
            ))}
        </div>
    );
};

export default TaskList;
