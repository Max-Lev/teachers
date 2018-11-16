import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Teacher } from 'src/app/components/grid/grid.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { StudentsLoadAction } from 'src/app/reducers/studetnts/students.actions';
import { LoadTeacherAction } from 'src/app/reducers/teachers/load-teachers/load-teachers-reducer.actions';

@Injectable({
  providedIn: 'root'
})
export class TeachersResolverService implements Resolve<Teacher[]> {

  constructor(private store: Store<AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    this.store.dispatch(new LoadTeacherAction([]));
    this.store.dispatch(new StudentsLoadAction([]));

  }

}
