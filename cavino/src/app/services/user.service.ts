import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uuid = localStorage.getItem('uuid');
  private token = localStorage.getItem('token');
  private options = {headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'})};
  private userInfoUri = 'https://esgi-cavino-api.herokuapp.com/api/user/' + this.uuid;

  constructor(private http: HttpClient) {
  }

  getUserInfo(): any {
    return this.http.get(this.userInfoUri, this.options);
  }
}
