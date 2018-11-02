import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

}
