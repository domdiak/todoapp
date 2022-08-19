const FilterBar = ({ showCompleted, toggleFilter }) => {
    return (
        <div>
            <h2> Component: FilterBar</h2>
            <input
                checked={showCompleted}
                onChange={toggleFilter}
                type="checkbox"
            />
        </div>
    );
};

export default FilterBar;
