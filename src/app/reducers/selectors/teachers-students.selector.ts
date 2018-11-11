import { LoadTeachersState } from '../teachers/load-teachers/load-teachers-reducer.reducer';
import { StudentsState } from '../studetnts/students.actions';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export interface TeachersStudentsState {
    teachers: LoadTeachersState;
    students: StudentsState;
}

//prop selector
export const teachers = (state: AppState) => state.TeachersState;

export const students = (state: AppState) => state.StudentsState;

export const teachers_students_selector = createSelector(
    teachers, students, (teachers: LoadTeachersState, students: StudentsState): LoadTeachersState => {
        
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

        return teachers_students_list;
    });



  // featureSelector
  // export const getTeachers = createFeatureSelector<TeachersStudentsState>('teachers');
  // export const getTeachersStudents = createSelector((getTeachers, state: TeachersStudentsState) => {
  //   console.log(state, getTeachers)
  //   return getTeachers;
  // });


