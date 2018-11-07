import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LoadTeacherAction } from 'src/app/reducers/teachers/load-teachers-reducer.actions';
import { Teacher } from 'src/app/models/teacher.model';
import { TeachersEffects } from 'src/app/reducers/teachers/effects/teachers.effects';
import { StudentsLoadAction } from 'src/app/reducers/studetnts/students.actions';
import { combineLatest } from 'rxjs';
import { teachers_students_selector, TeachersStudentsState } from 'src/app/reducers/selectors/teachers_students.selector';
import { LoadTeachersState } from 'src/app/reducers/teachers/load-teachers-reducer.reducer';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit, AfterViewInit {

  teachers: Teacher[] = [];

  constructor(private store: Store<AppState>, private teachersEffects: TeachersEffects) {
    this.store.dispatch(new LoadTeacherAction([]));
    this.store.dispatch(new StudentsLoadAction([]));
  }

  ngOnInit() {

    combineLatest(this.store.pipe(select('TeachersState')), this.store.pipe(select('StudentsState'))).subscribe((data) => {
      console.log('combinedData:', data);
    });

  };

  ngAfterViewInit(): void {
    this.store.select(teachers_students_selector).subscribe((teachers_students_list: LoadTeachersState) => {
      if (teachers_students_list !== undefined) {
        this.teachers = [...teachers_students_list.payload];
      }
    });
  };

}
