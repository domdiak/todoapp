import { ExclamationCircleIcon } from "@heroicons/react/solid";

const ErrorHandler = ({ error = "Error" }) => {
    console.log(error);
    return (
        <div className="m-2 p-2 border flex bg-red-400 items-center justify-center rounded-lg">
            <ExclamationCircleIcon className="h-7 w-7 m-1 fill-red-300" />
            <h2> {error}</h2>
        </div>
    );
};

export default ErrorHandler;
