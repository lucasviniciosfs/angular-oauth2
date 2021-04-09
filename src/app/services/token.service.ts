import { Injectable } from '@angular/core';

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh-token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getAccessToken(){
    localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken(){
    localStorage.getItem(REFRESH_TOKEN);
  }

  saveAccessToken(accessToken : string){
    localStorage.setItem(ACCESS_TOKEN, accessToken);
  }

  saveRefreshToken(refreshToken : string){
    localStorage.setItem(ACCESS_TOKEN, refreshToken);
  }

  removeAccessToken(){
    localStorage.removeItem(ACCESS_TOKEN);
  }

  removeRefreshToken(){
    localStorage.removeItem(REFRESH_TOKEN);
  }
  
}
