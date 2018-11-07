import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  combineReducers
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { LoadTeachersState, LoadTeachersReducer } from './teachers/load-teachers-reducer.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './router/router-serializer';
import { StudentsState } from './studetnts/students.actions';
import { StudetnsReducer } from './studetnts/students.reducer';

export interface AppState {
  RouterState: RouterReducerState<RouterStateUrl>;
  TeachersState: LoadTeachersState;
  StudentsState: StudentsState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  RouterState: routerReducer,
  TeachersState: LoadTeachersReducer,
  StudentsState: StudetnsReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

