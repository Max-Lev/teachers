import { Action } from '@ngrx/store';

export enum LoadTeachersActionTypes {
  InitialTeachersState = '[LoadTeachersAction] Load_Teacher_Initial',
  LoadTeachersAction = '[LoadTeachersAction] Load_Teacher_Action',
  LoadTeachersSuccessAction = '[LoadTeachersAction] Load_Teacher_Success',
  LoadTeacherFailAction = '[LoadTeachersAction] Load_Teacher_Fail'
}

export class LoadTeachersInitial implements Action {
  readonly type = LoadTeachersActionTypes.InitialTeachersState;
  payload: any;
  constructor() {
    this.payload = [];
  }
}
export class LoadTeacherAction implements Action {
  readonly type = LoadTeachersActionTypes.LoadTeachersAction;
  payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }
}
export class LoadTeacherSuccess implements Action {
  readonly type = LoadTeachersActionTypes.LoadTeachersSuccessAction;
  payload: any;
  action: string;
  constructor(payload: any) {
    this.payload = payload;
  }
}
export class LoadTeacherFail implements Action {
  readonly type = LoadTeachersActionTypes.LoadTeacherFailAction;
  payload: any;
  action: string;
  constructor(payload: any) {
    this.payload = payload;
  }
}

// export class SelectTeachersAction implements Action {
//   readonly type = LoadTeachersActionTypes.SelectTeacherAction;
//   payload: any;
//   action: string;
//   constructor(payload: any) {
//     this.payload = payload;
//   }
// }

export type LoadTeachersReducerActions =
  LoadTeacherAction | LoadTeacherSuccess | LoadTeacherFail;
