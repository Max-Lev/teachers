import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ApiService } from './shared/api.service';
import { TeachersApiService } from './shared/teachers-api.service';
import { Teacher } from './models/teacher.model';
import { TeacherService } from './shared/teacher.service';
import { StoreModule } from '@ngrx/store';
import { AppReducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './reducers/router/router-serializer';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { EffectsModule } from '@ngrx/effects';
import { TeachersEffects } from './reducers/teachers/effects/teachers.effects';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    LayoutModule,
    // Store
    StoreModule.forRoot(AppReducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    //Effects
    EffectsModule.forRoot([TeachersEffects]),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RoutesModule,
  ],
  providers: [
    // router-serializer
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: Teacher, useClass: Teacher },
    ApiService,
    TeachersApiService,
    TeacherService,
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
