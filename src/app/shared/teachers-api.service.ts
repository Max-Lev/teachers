import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachersApiService {

  constructor() { }

  getTeachersHandler(){
    console.log('getTeachersHandler')
  }

}
