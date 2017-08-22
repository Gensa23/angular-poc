import { RECEIVE_USER, UPDATE_NAME, UPDATE_AGE, Actions } from '../actions'


export interface State {
    id: number
    name: string
    age: number
}

const initalState = { id: 0, name: '', age: 0}

export function reducer(state: State = initalState, action: Actions): State {
    switch (action.type) {
        case RECEIVE_USER:
            return action.payload
        case UPDATE_NAME:
            return Object.assign({}, state, { name: action.payload })
        case UPDATE_AGE:
            return Object.assign({}, state, { age: action.payload })
        default:
            return state
    }
}