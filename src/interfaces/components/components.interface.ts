import { IPatient } from "../patient.interface";
import { FormEditionState, PatientListState, PatientState } from "./states.interface";

export interface PropsPatientComponent {
    patient: IPatient,
    deletePatient: (id: string ) => void,
    patientState: PatientState,
    formEditionState: FormEditionState
}

export interface PropsFormComponent {
    patientState: PatientState,
    patientListState: PatientListState,
    formEditionState: FormEditionState,
}

export interface PropsPatientListComponent {
    patientState: PatientState,
    patientListState: PatientListState,
    formEditionState: FormEditionState,
}