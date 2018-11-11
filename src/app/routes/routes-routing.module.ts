import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'teachers', pathMatch: 'full'
  },
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
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
