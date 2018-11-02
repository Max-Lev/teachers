import { Component, Inject, AfterViewInit, Injectable, ViewChild } from '@angular/core';
import { ApiService } from './shared/api.service';
import { Teacher } from './models/teacher.model';
import { TeacherService } from './shared/teacher.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { routesNav, RoutesNav } from './routes/routes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  mobileQuery: MediaQueryList;

  routesNav: RoutesNav[] = routesNav;

  fillerContent = [];

  private _mobileQueryListener: () => void;

  mobileMenuActive: boolean;
 
  @ViewChild('snav') snav: MatSidenav;

  // , public teacherService: TeacherService
  constructor(private apiService: ApiService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.apiService.getTeachersHandler();
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  };

  ngAfterViewInit(): void {
    this.apiService.getTeacherName();
  };

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  };

  onMobileMenuButton(event) {
    this.mobileMenuActive = !this.mobileMenuActive;
    event.preventDefault();
  }

  hideMobileMenu(event) {
    this.mobileMenuActive = false;
    event.preventDefault();
  }



}
