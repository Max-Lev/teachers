import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, pipe, of, Subject, combineLatest } from 'rxjs';
import { LoadTeachersActionTypes, LoadTeacherFail, LoadTeacherSuccess, LoadTeacherAction } from 'src/app/reducers/teachers/load-teachers/load-teachers-reducer.actions';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, flatMap, switchMap, tap, exhaustMap, debounceTime } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { Teacher } from 'src/app/models/teacher.model';
import { StudentsActionEnum, StudentsLoadSuccessAction, StudentsLoadAction } from '../../studetnts/students.actions';
import { AppState } from '../..';
import { environment } from 'src/environments/environment';


@Injectable()
export class TeachersEffects {

  constructor(private actions$: Actions, private http: HttpClient, private store: Store<AppState>) { };

  @Effect()
  loadTeachersAction$: Observable<Action> = this.actions$.pipe(
    ofType(LoadTeachersActionTypes.LoadTeachersAction),
    mergeMap(action => { return this.teachers$() }),
  );

  teachers$$: Subject<any> = new Subject();
  teachers$(): Observable<Action> {
    ofType(LoadTeachersActionTypes.LoadTeachersAction);
    return this.http.get(`${environment.apiUrl}/teachers`).pipe(
      map(data => (new LoadTeacherSuccess(data))),
      catchError(() => of({ type: LoadTeachersActionTypes.LoadTeacherFailAction }))
    );
  };

  @Effect()
  loadStudentsAction$: Observable<Action> = this.actions$.pipe(
    ofType(StudentsActionEnum.STUDENTS_LOAD_ACTION),
    mergeMap(action => this.students$())
  );

  students$(): Observable<Action> {
    ofType(StudentsActionEnum.STUDENTS_LOAD_ACTION);
    return this.http.get(`${environment.apiUrl}`).pipe(debounceTime(1000)).pipe(
      map(info => (new StudentsLoadSuccessAction(info))),
      catchError(() => of({ type: StudentsActionEnum.STUDENTS_LOAD_FAIL }))
    );
  };


  // @Effect()
  // loadTeachers$: Observable<Action> = this.actions$.pipe(
  //   ofType(TeachersReducerActionTypes.LoadTeachersAction),
  //   mergeMap(action =>
  //     this.http.get('http://localhost:3000/teachers').pipe(
  //       // If successful, dispatch success action with result
  //       map(data => ({ type: TeachersReducerActionTypes.LoadTeachersSuccessAction, payload: data })),
  //       // If request fails, dispatch failed action
  //       catchError(() => of({ type: TeachersReducerActionTypes.LoadTeacherFailAction }))
  //     ),
  //   ),
  //   mergeMap(users => {
  //     console.log(users)
  //     return this.http.get('http://localhost:3000').pipe(
  //       map(data => ({ type: StudentsActionEnum.STUDENTS_LOAD_SUCCESS, payload: data })),
  //       catchError(() => of({ type: StudentsActionEnum.STUDENTS_LOAD_FAIL }))
  //     )
  //   })
  // );

}
