import {useState, useEffect, Dispatch, SetStateAction } from "react";
//Components
import Patient from "./Patient";
import Alert from "./Alert";
//Interfaces (props, objects, etc)
import { PropsPatientListComponent } from "../interfaces/components/components.interface";
import { IPatient, InitialPatient } from "../interfaces/patient.interface";
import { AlertDefaultValue, IAlert } from "../interfaces/alert.interface";

const PatientList = (props: PropsPatientListComponent): JSX.Element => {
    const [alertInfo, setAlertInfo]: [IAlert, Dispatch<SetStateAction<IAlert>>] = useState(AlertDefaultValue);
    const [showAlert, setShowAlert]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    const {
        patientState,
        patientState: {setPatient},
        patientListState: {patientList, setPatientList},
        formEditionState
    } = props;

    function deletePatient(id: string): void {
        if (id) {
            const patientListUpdated: IPatient[] = [...patientList.filter((patient: IPatient) => patient.id !== id)];
            
            setPatientList(patientListUpdated);
            setPatient(InitialPatient);
        
            setAlertInfo({type: 'alert', msg: 'Paciente eliminado correctamente'});
            
            setShowAlert(true);
            setTimeout(() => {

                setShowAlert(false);
                setAlertInfo(AlertDefaultValue);
            }, 1500);
        }
    }

    return (
        <section className="md:w-1/2 lg:w-3/5 my-10 md:my-0">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-lg my-5 text-center">
                Administra tus{' '}
                <span className="text-purple-500 font-bold">Pacientes</span>{' y '}
                <span className="text-purple-500 font-bold">Citas</span>
            </p>

            {showAlert ? <Alert type={alertInfo.type} msg={alertInfo.msg} /> : ''}

            <div className="md:h-screen md:overflow-y-auto overflow-x-hidden">
                {
                    !patientList.length

                    ? <p className="text-center font-bold text-yellow-600">Comienza añadiendo un paciente...</p> 
                    
                    : patientList.map((patient: IPatient) => 
                        <Patient 
                            key={patient.id} 
                            patient={patient}
                            deletePatient={deletePatient}
                            patientState={patientState}
                            formEditionState={formEditionState}
                        />
                    )
                }
            </div>
        </section>
    );
}

export default PatientList;