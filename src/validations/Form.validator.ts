import { IPatient } from "../interfaces/patient.interface";

const REGEX_EMAIL_VALIDATION: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const PatientFormValidation = (patient: IPatient): [boolean, string] => {
    if (Object.values(patient).some(value => !value)) {
        return [false, 'Hay Campos Vacíos'];
    }

    if (!REGEX_EMAIL_VALIDATION.test(patient.email)) {
        return [false, 'Email inválido'];
    }

    return [true, 'Campos correctos'];
}

export {
    PatientFormValidation
}