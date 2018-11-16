import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Teacher } from 'src/app/models/teacher.model';
import { TeachersEffects } from 'src/app/reducers/teachers/effects/teachers.effects';
import { teachers_students_selector, TeachersStudentsState } from 'src/app/reducers/selectors/teachers-students.selector';
import { SelectedTeachersSelected } from 'src/app/reducers/teachers/select-teachers/selec-teacher.actions';
import { SortActionsEnum } from 'src/app/reducers/teachers/sort/sort.reducer';



@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit, AfterViewInit {

  teachers: Teacher[] = [];

  constructor(private store: Store<AppState>, private teachersEffects: TeachersEffects) {

    this.store.select(teachers_students_selector).subscribe((teachers_students_list: TeachersStudentsState) => {
      if (teachers_students_list !== undefined) {
        if (teachers_students_list.sorting.type !== SortActionsEnum.SORT_DEFAULT) {
          this.teachers = [...teachers_students_list.sorting.payload];
        } else {
          this.teachers = [...teachers_students_list.teachers.payload];
        }
      }
    });

  }

  ngOnInit() {

  };

  ngAfterViewInit(): void {

  };

  selectedHandler(teachers: Teacher[]) {
    this.store.dispatch(new SelectedTeachersSelected(teachers));
    console.log('selected teacher handler: ', teachers);
  }

}
