import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { Routes, RouterModule } from '@angular/router';
import { TableMultiSortComponent } from 'src/app/components/table-multi-sort/table-multi-sort.component';
import { TableModule } from 'primeng/table';
const routes: Routes = [
  {
    path: '', component: StudentsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule
  ],
  declarations: [StudentsComponent,
    TableMultiSortComponent
  ],
  entryComponents: [

  ],
  providers: [

  ]
})
export class StudentsModule { }
