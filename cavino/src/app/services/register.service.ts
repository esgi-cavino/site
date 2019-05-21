import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type','application/json');
  }

  register(firstname: string, lastname: string, email: string, password: string) : any {
    return this.http.post("http://localhost:8080/api/signup", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    });
  }
}
