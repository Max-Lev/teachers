import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.scss']
})
export class TeacherCardComponent implements OnInit, AfterViewInit {

  teachersForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.teachersForm = this.formBuilder.group({
      teacherName: new FormControl('')
    });

  };

  ngOnInit() {

  };

  ngAfterViewInit(): void {
    this.teachersForm.valueChanges.subscribe((val) => {
      console.log('val: ', val);
    });
  };




}
