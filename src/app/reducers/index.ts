import {
  ActionReducer,
  ActionReducerMap, 
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TeachersState, TeachersReducer } from './teachers/teachers-reducer.reducer';

export interface AppState {
  teachersState: TeachersState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  teachersState: TeachersReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
