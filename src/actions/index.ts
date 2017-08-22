import { Action } from '@ngrx/store'


export class ReceiveUser implements Action {
    readonly type: string = RECEIVE_USER
    payload: any
}


export class UpdateName implements Action {
    readonly type: string = UPDATE_NAME
    payload: string
}

export class UpdateAge implements Action {
    readonly type: string = UPDATE_AGE
    payload: number
}

export type Actions = ReceiveUser | UpdateName | UpdateAge

export const RECEIVE_USER = 'RECEIVE_USER'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_AGE = 'UPDATE_AGE'
