import { IAlert } from "../interfaces/IAlert";

const Alert = (props: IAlert): JSX.Element => {
    return (
        <div id="alert" className={`showing p-2 ${props.error ? 'bg-red-500 ' : 'bg-green-500'} fixed md:absolute w-full top-0 left-0 shadow-md font-bold text-white text-center`}>
            <p>{props.msg}</p>
        </div>
    );
}

export default Alert;