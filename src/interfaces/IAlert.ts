export interface IAlert {
    error: boolean
    msg: string
}

export const AlertDefaultValue: IAlert = {
    error: false,
    msg: ''
}