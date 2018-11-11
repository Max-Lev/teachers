import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  combineReducers
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { LoadTeachersState, LoadTeachersReducer } from './teachers/load-teachers/load-teachers-reducer.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './router/router-serializer';
import { StudentsState } from './studetnts/students.actions';
import { StudetnsReducer } from './studetnts/students.reducer';
import { SelectedTeachersState } from './teachers/select-teachers/selec-teacher.actions';
import { TeachersSelectReducer } from './teachers/select-teachers/select-teachers.reducer';
import { SortState, SortReducer } from './teachers/sort/sort.reducer';

export interface AppState {
  RouterState: RouterReducerState<RouterStateUrl>;
  TeachersState: LoadTeachersState;
  StudentsState: StudentsState;
  TeachersSelectState: SelectedTeachersState;
  SortState: SortState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  RouterState: routerReducer,
  TeachersState: LoadTeachersReducer,
  StudentsState: StudetnsReducer,
  TeachersSelectState: TeachersSelectReducer,
  SortState: SortReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

