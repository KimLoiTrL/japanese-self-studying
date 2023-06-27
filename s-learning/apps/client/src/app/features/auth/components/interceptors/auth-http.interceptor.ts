import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse  } from '@angular/common/http';
import { LocalStorageService } from '../../local-storage.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    constructor(private localStorageService: LocalStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.localStorageService.getAccessToken();

        if (token) {

            const headers = req.headers
                // Set access token to http request
                .set('Authorization', 'Bearer ' + token);


            const authReq = req.clone({ headers });
            return next.handle(authReq).pipe(
                // tap(evt => this.onResponse(evt)),
                catchError(evt => this.onResponse(evt))
            );
        }

        return next.handle(req).pipe(
            // tap(evt => this.onResponse(evt)),
            catchError(evt => this.onResponse(evt))
        );
    }

    onResponse(evt: any) {
        return throwError(evt);
    }
}
