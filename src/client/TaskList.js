import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleDelete, handleIsCompleted }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    handleDelete={handleDelete}
                    handleIsCompleted={handleIsCompleted}
                />
            ))}
        </div>
    );
};

export default TaskList;
