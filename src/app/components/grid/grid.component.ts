import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { SelectedTeachersState, SelectedTeachersSelected } from 'src/app/reducers/teachers/select-teachers/selec-teacher.actions';
import { getSelectedTeachersSelector } from 'src/app/reducers/selectors/selected-teacher.selector';
import { SortAscState, SortState, SortActionsEnum, SortDscState } from 'src/app/reducers/teachers/sort/sort.reducer';


export interface Teacher {
  Name: string;
  Location: string;
  Occupation: string;
  Students?: any;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {

  @Input() teachers?: Teacher[] = [];

  selectedTeacher: Teacher;

  @Output() selectedEmitter: EventEmitter<Teacher> = new EventEmitter();

  cols: any[] = [
    { header: 'Name', sort: false },
    { header: 'Location', sort: false },
    { header: 'Occupation', sort: false }
  ];

  prevColSort: number = 0;

  prevColName: string = null;

  orderType: string;

  constructor(private store: Store<AppState>) {

    this.store.pipe(select(getSelectedTeachersSelector)).subscribe((state: SelectedTeachersState) => {
      console.log('getSelectedTeachersSelector: ', state);
    });

    this.store.pipe(select('SortState')).subscribe((state: SortState) => {
      console.log('SortState: ', state);
      this.orderType = state.type;
      this.teachers = [...state.payload];
    });

  };

  ngOnInit() { };

  ngOnChanges(): void { };

  selected(teacher: Teacher) {
    this.store.dispatch(new SelectedTeachersSelected(this.selectedTeacher));
  };

  sort(colName: any, dataSource: Teacher[]) {

    if (this.orderType === SortActionsEnum.SORT_DEFAULT || this.orderType === SortActionsEnum.SORT_DSC) {
      this.store.dispatch(new SortAscState(colName, dataSource));
    } else {
      this.store.dispatch(new SortDscState(colName, dataSource));
    }

  };





}
