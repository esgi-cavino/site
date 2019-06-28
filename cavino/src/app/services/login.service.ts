import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationModel } from '../constants/generalconstants';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private headers: HttpHeaders;
  private loginUri = ApplicationModel.DefaultApplicationDetails.onlineUrl + ApplicationModel.DefaultApplicationDetails.loginRoute

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  login(user: string, password: string): any {
    return this.http.post(
        this.loginUri,
        {
          email: user,
          password
        });
  }
}
