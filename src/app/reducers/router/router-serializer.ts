import { Injectable } from '@angular/core';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Params, Data } from '@angular/router';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
    data: Data;
}

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {

        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }
        const { url, root: { queryParams } } = routerState;

        const { params } = route;

        // const data = routerState.root.data;
        // destructing
        const { data } = routerState.root;

        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, params, queryParams, data };
    }
}
