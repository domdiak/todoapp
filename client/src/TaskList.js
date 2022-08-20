import TaskItem from "./TaskItem";

const TaskList = ({
    tasks,
    setError,
    handleDeleteTask,
    handleIsCompleted,
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
                    handleIsCompleted={handleIsCompleted}
                    handleUpdateTaskTitle={handleUpdateTaskTitle}
                />
            ))}
        </div>
    );
};

export default TaskList;
