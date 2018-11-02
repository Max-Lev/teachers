import { Action } from '@ngrx/store';
import { TeachersReducerActionTypes, TeachersReducerActions } from './teachers-reducer.actions';


export interface TeachersState {
  action: string;
  payload?: any;
}

export const initialState: TeachersState = {
  action: TeachersReducerActionTypes.InitialTeachersReducers,
  payload: []
};

export function TeachersReducer(state = initialState, action: TeachersReducerActions): TeachersState {
  switch (action.type) {

    case TeachersReducerActionTypes.LoadTeachersReducers:
      debugger;
      const load = {
        ...action, ...state,
        payload: action.payload
      }
      return load;
    case TeachersReducerActionTypes.SelectTeachersReducers:
      const selected = {
        ...action, ...state,
        payload: action.payload
      }
      return selected;
    default:
      console.log('TeachersReducer: ', state, action);
      return state;
  }
}
