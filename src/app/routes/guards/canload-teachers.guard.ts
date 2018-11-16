import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Observable, timer, Subject, of } from 'rxjs';
import { timeout, debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanloadTeachersGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const obs: Subject<any> = new Subject();
    this.canLoad$().subscribe(s => {
      obs.next(s);
      this.router.navigateByUrl('teachers');
    })
    return obs;
  };

  s: Subject<boolean> = new Subject();
  canLoad$(): Observable<boolean> {
    this.s.next(false);
    setTimeout(() => {
      this.s.next(true);
    }, 1000);
    return this.s;
  }

}
