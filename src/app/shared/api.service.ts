import { Injectable, Inject } from '@angular/core';
import { TeachersApiService } from './teachers-api.service';
import { TeacherService } from './teacher.service';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements TeachersApiService, TeacherService {

  constructor(@Inject(Teacher) public teacher: Teacher) {

  };

  getTeacherName(): void {
    console.log('api-service: teacher-name')
  }

  getTeachersHandler(): void {
    console.log('api-service: get-teachers-handler');
  };
}
