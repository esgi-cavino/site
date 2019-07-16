import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {stringify} from 'querystring';
import {Token} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uuid = localStorage.getItem('uuid');
  private token = localStorage.getItem('token');
  private options = {headers: new HttpHeaders({'Content-Type': 'application/json', Authorization: this.token})};
  private userInfoUri = 'https://esgi-cavino-api.herokuapp.com/api/user/' + this.uuid;

  constructor(private http: HttpClient) {
  }

  getUserInfo(): any {
    return this.http.get(this.userInfoUri, this.options);
  }
}
