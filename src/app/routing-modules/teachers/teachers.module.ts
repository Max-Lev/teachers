import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TeachersEffects } from 'src/app/reducers/teachers/effects/teachers.effects';

const routes: Routes = [
  {
    path: '', component: TeachersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    HttpClientModule,
    // EffectsModule.forRoot([TeachersEffects]),
  ],
  declarations: [
    TeachersComponent,
    GridComponent
  ],
  providers: [
    
  ]
})
export class TeachersModule { }
