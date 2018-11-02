import { Injectable, Inject } from '@angular/core';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(@Inject(Teacher) public teacher: Teacher) {
    console.log('TeacherService: ', this.teacher);
  }

  getTeacherName() {
    console.log(this.teacher)
    debugger;
  }

} 
