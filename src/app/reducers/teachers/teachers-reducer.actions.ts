import { Action } from '@ngrx/store';

export enum TeachersReducerActionTypes {
  InitialTeachersReducers = '[TeachersReducer] Initial TeachersReducers',
  LoadTeachersReducers = '[TeachersReducer] Load TeachersReducers',
  SelectTeachersReducers = '[TeachersReducer] Select TeachersReducers',
}

export class LoadTeachersReducers implements Action {
  readonly type = TeachersReducerActionTypes.LoadTeachersReducers;
  payload: any;
}
export class SelectTeachersReducers implements Action {
  readonly type = TeachersReducerActionTypes.SelectTeachersReducers;
  payload: any;
}

export type TeachersReducerActions =
  LoadTeachersReducers | SelectTeachersReducers;
