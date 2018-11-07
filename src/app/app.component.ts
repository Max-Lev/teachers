import { Component, Inject, AfterViewInit, Injectable, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { routesNav, RoutesNav } from './routes/routes';
import { AppState } from './reducers';
import { Store, select } from '@ngrx/store';
import { RouterState } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  mobileQuery: MediaQueryList;

  routesNav: RoutesNav[] = routesNav;

  private _mobileQueryListener: () => void;

  mobileMenuActive: boolean;

  @ViewChild('snav') snav: MatSidenav;

  constructor(private store: Store<AppState>, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.routerState$();
  };

  ngAfterViewInit(): void {

  };

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  };

  routerState$() {
    this.store.pipe(select('RouterState')).subscribe((state: RouterState) => {
      //   console.log('RouterState: ', state);
      return state;
    });
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
