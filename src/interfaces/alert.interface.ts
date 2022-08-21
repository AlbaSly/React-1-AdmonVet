export interface IAlert {
    type: string,
    msg: string
}

export const AlertDefaultValue: IAlert = {
    type: 'info',
    msg: ''
}