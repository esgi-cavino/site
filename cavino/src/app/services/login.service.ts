import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MyConfig } from "../config/config";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type','application/json');
  }

  login(user: string, password: string) : any {
    return this.http.post(
        'https://esgi-cavino-api.herokuapp.com/api/signin',
        {
          email: user,
          password: password
        }
        );
  }
}
