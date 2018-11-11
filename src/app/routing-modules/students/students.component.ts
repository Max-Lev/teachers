import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { LoadTeachersState } from 'src/app/reducers/teachers/load-teachers/load-teachers-reducer.reducer';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    // this.store.pipe(select('TeachersState')).subscribe((state: LoadTeachersState) => {
    //   console.log(state)
    // })
  }

  ngOnInit() {
  }

}
