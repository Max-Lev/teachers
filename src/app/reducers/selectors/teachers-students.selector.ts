import { LoadTeachersState } from '../teachers/load-teachers/load-teachers-reducer.reducer';
import { StudentsState } from '../studetnts/students.actions';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { SortState } from '../teachers/sort/sort.reducer';

export interface TeachersStudentsState {
    teachers: LoadTeachersState;
    students?: StudentsState;
    sorting: SortState;
}

//prop selector
export const teachers = (state: AppState) => state.TeachersState;
export const students = (state: AppState) => state.StudentsState;
export const sorting = (state: AppState) => state.SortState;

export const teachers_students_selector = createSelector(
    teachers, students, sorting,
    (teachers: LoadTeachersState, students: StudentsState, sorting: SortState): TeachersStudentsState => {

        if (teachers.payload.length === 0) return;

        const ids: string[][] = teachers.payload.map(item => item.Students);

        const teachers_students_list: any = Object.assign({}, teachers);

        ids.map((idlistitem, index) => {

            teachers_students_list.payload[index]['_students'] = [];

            idlistitem.map(id => {

                students.payload.map(std => {
                    if (std._id === id) {
                        teachers_students_list.payload[index]['_students'].push(std);
                    }
                });

            })
        });

        return {
            teachers: teachers_students_list,
            sorting: sorting
        };
    });



  // featureSelector
  // export const getTeachers = createFeatureSelector<TeachersStudentsState>('teachers');
  // export const getTeachersStudents = createSelector((getTeachers, state: TeachersStudentsState) => {
  //   console.log(state, getTeachers)
  //   return getTeachers;
  // });


