import TaskItem from "./TaskItem";

const TaskList = ({
    tasks,
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
                    handleDeleteTask={handleDeleteTask}
                    handleIsCompleted={handleIsCompleted}
                    handleUpdateTaskTitle={handleUpdateTaskTitle}
                />
            ))}
        </div>
    );
};

export default TaskList;
