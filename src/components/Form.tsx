import {useState, useEffect, Dispatch, SetStateAction, FormEvent} from 'react';
//Components
import Alert from './Alert';
//Validations
import { PatientFormValidation } from '../validations/Form.validator';
//Interfaces (props, objects, etc)
import { PropsFormComponent } from '../interfaces/components/components.interface';
import { InitialPatient, IPatient } from '../interfaces/patient.interface';
import { AlertDefaultValue, IAlert } from '../interfaces/alert.interface';

const Form = (props: PropsFormComponent): JSX.Element => {
    const [alertInfo, setAlertInfo]: [IAlert, Dispatch<SetStateAction<IAlert>>] = useState(AlertDefaultValue);
    const [showAlert, setShowAlert]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    const {
        patientState: {patient, setPatient}, 
        patientListState: {patientList, setPatientList},
        formEditionState: {formEdition, setFormEdition}
    } = props;

    const handleSubmit = async (ev: FormEvent<HTMLFormElement>): Promise<void> => {
        ev.preventDefault();

        const validationResult: [boolean, string] = PatientFormValidation(patient);

        if (!validationResult[0]) {
            setAlertInfo({type: 'error', msg: validationResult[1]});

            displayAlert();
            return;
        }

        if (!formEdition) {
            addPatient();

            setAlertInfo({type: 'success', msg: 'Paciente agregado correctamente'});
            displayAlert();
            return;
        }

        updatePatient();

        setAlertInfo({type: 'success', msg: 'Paciente actualizado correctamente'});
        displayAlert();
    }
    
    function addPatient(): void {
        const newPatient: IPatient = {
            ...patient,
            id: generateId()
        }

        const patientListUpdated: IPatient[] = [...patientList, newPatient];

        setPatientList(patientListUpdated);

        setPatient(InitialPatient);
    }

    function updatePatient(): void {
        const patientUpdated: IPatient = {
            ...patient
        }

        const patientListUpdated: IPatient[] = [...patientList.map((patient: IPatient) => patient.id === patientUpdated.id ? patientUpdated : patient)];

        setPatientList(patientListUpdated);

        setFormEdition(false);
        setPatient(InitialPatient);
    }

    function generateId(): string {
        const currenTime: string = Date.now().toString(36);
        const randomGen: string = Math.random().toString(36).substring(2);
    
        const newId = `${currenTime}${randomGen}`;
    
        return newId;
    }

    function displayAlert(): void {
        if (showAlert) return;

        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 1500);
    }

    return (
        <section className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg my-5 text-center">
                Añade pacientes y {''}
                <span className="text-purple-500 font-bold">Adminístralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 relative">
                {showAlert ? <Alert msg={alertInfo.msg} type={alertInfo.type}></Alert> : ''}
                <div className="mb-2">
                    <label htmlFor="pet" className="block p-2 text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input 
                        id="pet" 
                        type="text" 
                        value={patient.pet} 
                        onChange={ev => setPatient({...patient, pet: ev.target.value})} 
                        className="block w-full p-2 border-2 border-gray-200 placeholder-purple-400 text-purple-600 rounded-md" placeholder="Nombre de la mascota" />
                </div>
                <div className="mb-2">
                    <label htmlFor="owner" className="block p-2 text-gray-700 uppercase font-bold">Nombre Dueño</label>
                    <input 
                        id="owner" 
                        type="text" 
                        value={patient.owner} 
                        onChange={ev => setPatient({...patient, owner: ev.target.value})} 
                        className="block w-full p-2 border-2 border-gray-200 placeholder-purple-400 text-purple-600 rounded-md" placeholder="Nombre del dueño"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="block p-2 text-gray-700 uppercase font-bold">Email</label>
                    <input
                        id="email" 
                        type="email" 
                        value={patient.email}
                        onChange={ev => setPatient({...patient, email: ev.target.value})}
                        className="block w-full p-2 border-2 border-gray-200 placeholder-purple-400 text-purple-600 rounded-md" placeholder="Email del dueño"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="discharge-date" className="block p-2 text-gray-700 uppercase font-bold">Fecha de Alta</label>
                    <input 
                        id="discharge-date" 
                        type="date" 
                        value={new Date(patient.date).toISOString().split('T')[0]}
                        onChange={ev => setPatient({...patient, date: new Date(ev.target.value)})} 
                        className="block w-full p-2 border-2 border-gray-200 placeholder-purple-400 text-purple-600 rounded-md"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="description" className="block p-2 text-gray-700 uppercase font-bold">Síntomas</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        value={patient.description} 
                        onChange={ev => setPatient({...patient, description: ev.target.value})}
                        className="block w-full p-2 border-2 border-gray-200 placeholder-purple-400 text-purple-600 rounded-md" placeholder="Descripción de los síntomas" />
                </div>

                <input 
                    type="submit"
                    className="p-4 w-full mt-5 text-center bg-purple-500 hover:bg-purple-600 hover:cursor-pointer shadow-md hover:shadow-xl font-black text-white uppercase rounded-md" value={!formEdition ? 'Agregar' : 'Guardar'}/>
            </form>
        </section>
    );
}

export default Form;