export interface IPatient {
    id?: string | null,
    pet: string,
    owner: string,
    email: string,
    date: Date,
    description: string
}

export const InitialPatient: IPatient = {
    pet: '',
    owner: '',
    email: '',
    date: new Date(),
    description: ''
}

export const InitialPatientArray: IPatient[] = [];