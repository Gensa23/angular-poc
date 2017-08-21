import { Action } from '@ngrx/store';


const initalState = {
	id: 0,
	name: '',
	age: 0
}

export function userProfileReducer(state = initalState, action: Action) {
	switch (action.type) {
		case INCREMENT:
			return state + 1;

		case DECREMENT:
			return state - 1;

		case RESET:
			return 0;

		default:
			return state;
	}
}