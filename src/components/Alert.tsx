import { IAlert } from "../interfaces/alert.interface";

const Alert = (props: IAlert): JSX.Element => {
    const {msg}: IAlert = props;

    return (
        <div id="alert" className={`showing p-2 ${props.error ? 'bg-red-500 ' : 'bg-green-500'} fixed md:absolute w-full top-0 left-0 shadow-md font-bold text-white text-center`}>
            <p>{msg}</p>
        </div>
    );
}

export default Alert;