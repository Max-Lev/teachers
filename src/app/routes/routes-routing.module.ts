import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersResolverService } from './resolvers/teachers-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { CanloadTeachersGuard } from './guards/canload-teachers.guard';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'teachers', loadChildren: 'src/app/routing-modules/teachers/teachers.module#TeachersModule',
    resolve: {
      TeachersResolver: TeachersResolverService
    },
    canActivate: [CanloadTeachersGuard],
    // canLoad: [CanloadTeachersGuard]
  },
  {
    path: 'students', loadChildren: 'src/app/routing-modules/students/students.module#StudentsModule'
  },
  {
    path: '', redirectTo: 'students', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false }),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [TeachersResolverService, CanloadTeachersGuard]
})
export class RoutesRoutingModule { }
