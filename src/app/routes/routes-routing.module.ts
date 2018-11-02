import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'teachers', loadChildren: 'src/app/routing-modules/teachers/teachers.module#TeachersModule'
  },
  {
    path: 'students', loadChildren: 'src/app/routing-modules/students/students.module#StudentsModule'
  },
  {
    path: '**', redirectTo: 'teachers', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
