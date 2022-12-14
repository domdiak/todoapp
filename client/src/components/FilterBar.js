const FilterBar = ({ hideCompleted, toggleFilter }) => {
    return (
        <div className="p-2 m-2  flex items-center justify-end ">
            <div className="flex items-end ">
                <label
                    htmlFor="toggle-completed"
                    className="flex items-center cursor-pointer relative "
                >
                    <input
                        type="checkbox"
                        id="toggle-completed"
                        className="sr-only"
                        checked={hideCompleted}
                        onChange={toggleFilter}
                    />
                    <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
                    <span className="ml-3 text-gray-900 text-sm font-medium">
                        Hide Completed
                    </span>
                </label>
            </div>
        </div>
    );
};

export default FilterBar;
