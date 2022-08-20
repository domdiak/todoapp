import TaskItem from "./TaskItem";

const TaskList = ({
    tasks,
    handleDelete,
    handleIsCompleted,
    handleUpdateTaskTitle,
}) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    handleDelete={handleDelete}
                    handleIsCompleted={handleIsCompleted}
                    handleUpdateTaskTitle={handleUpdateTaskTitle}
                />
            ))}
        </div>
    );
};

export default TaskList;
