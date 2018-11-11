import { AppState } from '..';
import { createSelector } from '@ngrx/store';
import { SelectedTeachersState } from '../teachers/select-teachers/selec-teacher.actions';

export const selectedTeachers = (state: AppState) => state.TeachersSelectState;

export const getSelectedTeachersSelector = createSelector(selectedTeachers, (state: SelectedTeachersState) => {
    return state;
});

