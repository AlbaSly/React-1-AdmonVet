//Interfaces (props, objects, etc)
import { PropsPatientComponent } from "../interfaces/components/components.interface";

const Patient = (props: PropsPatientComponent): JSX.Element => {
    const {
        patient,
        deletePatient, 
        patientState: {setPatient},
        formEditionState: {setFormEdition}
    } = props;

    function editPatient(): void {
        setPatient(patient);
        setFormEdition(true);
    }

    return (
        <div className="px-4 py-10 m-3 bg-white shadow-md hover:shadow-xl hover:scale-105 hover:cursor-pointer rounded-xl">
            <p className="mb-2 font-bold text-gray-600 uppercase">Nombre:{' '}
                <span className="font-normal normal-case">{patient.pet}</span>
            </p>

            <p className="mb-2 font-bold text-gray-600 uppercase">Dueño:{' '}
                <span className="font-normal normal-case">{patient.owner}</span>
            </p>

            <p className="mb-2 font-bold text-gray-600 uppercase">Email Contacto:{' '}
                <span className="font-normal normal-case">{patient.email}</span>
            </p>

            <p className="mb-2 font-bold text-gray-600 uppercase">Fecha de Alta:{' '}
                <span className="font-normal normal-case">{(new Date(patient.date).toLocaleDateString())}</span>
            </p>

            <p className="mb-2 font-bold text-gray-600 uppercase">Descripción de los síntomas:
                <br />
                <span className="font-normal normal-case">{patient.description}</span>
            </p>

            <div className="mb-2 mt-8 lg:flex gap-8">
                <button 
                    onClick={editPatient}
                    className="block w-full p-2 bg-yellow-200 text-yellow-600 hover:bg-yellow-400 hover:text-white font-bold">
                    Editar
                </button>
                <button 
                    onClick={() => deletePatient(patient.id!)}
                    className="block w-full p-2 mt-4 lg:mt-0 bg-red-200 text-red-600 hover:bg-red-400 hover:text-white font-bold">
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Patient;