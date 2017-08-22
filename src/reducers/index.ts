import { ActionReducerMap } from '@ngrx/store'
import * as userProfile from './userProfileReducer'


export interface State {
    userProfile: userProfile.State;
}

export const reducers: ActionReducerMap<State> = {
    userProfile: userProfile.reducer
}