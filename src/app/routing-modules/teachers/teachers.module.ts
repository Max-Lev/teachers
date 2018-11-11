import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { TeacherCardComponent } from 'src/app/components/teacher-card/teacher-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
const routes: Routes = [
  {
    path: '', component: TeachersComponent
  },
  {
    // path: '**', pathMatch: 'full'
    path: '**', redirectTo: 'teachers', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  declarations: [
    TeachersComponent,
    GridComponent,
    TeacherCardComponent
  ],
  providers: [

  ]
})
export class TeachersModule { }
