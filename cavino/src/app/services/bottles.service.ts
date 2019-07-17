import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BottlesService {

  private uuid = localStorage.getItem('uuid');
  private token = localStorage.getItem('token');
  private options = {headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'})};
  private userBottlesUri = 'https://esgi-cavino-api.herokuapp.com/api/bottle';

  constructor(private http: HttpClient) {}

  getUserBottles(offset: number, limit: number): any {
    return this.http.get(this.userBottlesUri + '?offset=' + offset + '&limit=' + limit, this.options);
  }
}
