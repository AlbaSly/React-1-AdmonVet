import { IAlert } from "../interfaces/alert.interface";

const Alert = (props: IAlert): JSX.Element => {
    const {type, msg}: IAlert = props;

    const bgColor: string = type === 'success' ? 'bg-green-500 fixed md:absolute' : type === 'error' ? 'bg-red-500 fixed md:absolute' : 'bg-yellow-500 fixed';

    return (
        <div id="alert" className={`showing p-2 ${bgColor} w-full top-0 left-0 z-20 shadow-md font-bold text-white text-center`}>
            <p>{msg}</p>
        </div>
    );
}

export default Alert;