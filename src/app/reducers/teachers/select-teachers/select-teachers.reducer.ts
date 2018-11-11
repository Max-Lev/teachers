import { initialState, SelectedTeachersState, SelecTeacherActionTypes } from './selec-teacher.actions';
import { Action } from '@ngrx/store';

export function TeachersSelectReducer(state = initialState, action: SelectedTeachersState): SelectedTeachersState {
  switch (action.type) {

    case SelecTeacherActionTypes.SelectTeachersSelected:
      const selected = {
        ...state, ...action,
        payload: action.payload,
        prev: [...setPrevSelection(state, action)]
      };
      return selected;
    default:
      return state;
  }
};

function setPrevSelection(state, action): any[] {
  state.prev.push(action.payload);
  return state.prev;
}
