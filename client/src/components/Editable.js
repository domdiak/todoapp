const Editable = ({ title, handleTitle }) => {
    return (
        <input
            value={title}
            onChange={handleTitle}
            className="p-1 bg-white2 rounded-md
            "
        />
    );
};

export default Editable;
