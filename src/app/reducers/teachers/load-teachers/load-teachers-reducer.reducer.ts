import { Action } from '@ngrx/store';
import { LoadTeachersActionTypes, LoadTeachersReducerActions, LoadTeachersInitial } from './load-teachers-reducer.actions';


export interface LoadTeachersState {
  type: string;
  payload?: any;
}

export const initialState: LoadTeachersState = {
  type: LoadTeachersActionTypes.LoadTeachersAction,
  payload: [{ name: 'Max' }]
};

export function LoadTeachersReducer(state = new LoadTeachersInitial(), action: LoadTeachersReducerActions): LoadTeachersState {
  switch (action.type) {

    case LoadTeachersActionTypes.LoadTeachersAction:
      const load_action = {
        ...state, ...action,
        type: action.type,
        payload: action['payload'],
      };
      return load_action;

    case LoadTeachersActionTypes.LoadTeachersSuccessAction:
      const load_success = {
        ...state, ...action,
        type: action.type,
        payload: action['payload'],
      };
      return load_success;

    case LoadTeachersActionTypes.LoadTeacherFailAction:
      const load_fail = {
        ...state,
        payload: action['payload'],
      };
      return load_fail;

    default:
      return state;
  }
}
