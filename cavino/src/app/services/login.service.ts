import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, Subscription} from "rxjs";

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
    return this.http.post("http://localhost:8080/api/signin",{
      email: user,
      password: password
    });
  }
}
