import { TokenService } from './token.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

const OAUTH_CLIENT = 'express-client';
const OAUTH_SECRET = 'express-secret';
const API_URL = 'http://localhost:3000';
const HTTP_OPTIONS = {
  headers: new Headers({
    'Content-type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic '+ btoa(OAUTH_CLIENT+ ':' + OAUTH_SECRET)
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl = '';

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private static log(message: string): any {
    console.log(message);
  }

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }
}
