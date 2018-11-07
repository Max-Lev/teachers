import { Component, OnInit, Input, OnChanges } from '@angular/core';
export interface Teacher {
  Name: string;
  Location: string;
  Occupation: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {

  cols: any = [
    { header: 'Name' },
    { header: 'Location' },
    { header: 'Occupation' }
  ];

  @Input() teachers?: Teacher[] = [];

  selectedTeacher: Teacher;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    // console.log(this.teachers)
  }

  selected(teacher: Teacher) {
    // console.log(teacher)
    console.log('selectedTeacher: ', this.selectedTeacher);
  }



}
