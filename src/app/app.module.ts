import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ApiService } from './shared/api.service';
import { TeachersApiService } from './shared/teachers-api.service';
import { Teacher } from './models/teacher.model';
import { TeacherService } from './shared/teacher.service';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import { StoreModule } from '@ngrx/store';
import { AppReducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
// import { TableModule } from 'primeng/table';
// import { SidebarModule } from 'primeng/sidebar';
// import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TeacherCardComponent,
  ],
  imports: [
    StoreModule.forRoot(AppReducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserModule,
    BrowserAnimationsModule,
    // TableModule,
    // SidebarModule,
    // ButtonModule,
    RouterModule,
    RoutesModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [
    { provide: Teacher, useClass: Teacher },
    ApiService,
    TeachersApiService,
    TeacherService,
    // { provide: ApiService, useClass: [TeachersApiService, TeacherService] },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
