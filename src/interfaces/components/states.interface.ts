import { Dispatch, SetStateAction } from "react";
import { IPatient } from "../patient.interface";

export interface PatientState {
    patient: IPatient,
    setPatient: Dispatch<SetStateAction<IPatient>>
}

export interface PatientListState {
    patientList: IPatient[],
    setPatientList: Dispatch<SetStateAction<IPatient[]>>
}

export interface FormEditionState {
    formEdition: boolean,
    setFormEdition: Dispatch<SetStateAction<boolean>>
}