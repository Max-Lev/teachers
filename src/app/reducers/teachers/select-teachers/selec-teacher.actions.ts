import { Action } from '@ngrx/store';

export enum SelecTeacherActionTypes {
  SelectTeachersInitial = '[SelectedTeacher] Initial',
  SelectTeachersSelected = '[SelectedTeacher] Selected',
}


export interface SelectedTeachersState {
  type: string;
  payload: any;
  prev?: any;
}

export const initialState: SelectedTeachersState = {
  type: SelecTeacherActionTypes.SelectTeachersInitial,
  payload: [],
  prev: []
};

export class SelectedTeachersInitial implements Action {
  readonly type = SelecTeacherActionTypes.SelectTeachersInitial;

}
export class SelectedTeachersSelected implements SelectedTeachersState {
  readonly type = SelecTeacherActionTypes.SelectTeachersSelected;
  payload: any;
  prev: any[];
  constructor(payload: any) {
    this.payload = payload;
  }
}

export type SelecTeacherActions = SelectedTeachersSelected | SelectedTeachersInitial;
