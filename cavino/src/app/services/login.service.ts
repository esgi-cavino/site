import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationModel } from '../constants/generalconstants';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private loginUri = ApplicationModel.DefaultApplicationDetails.onlineUrl + ApplicationModel.DefaultApplicationDetails.loginRoute

  constructor(private httpClient: HttpClient) {
  }

  login(user: string, password: string): any {
    return this.httpClient.post(
        this.loginUri,
        {
          email: user,
          password
        }, this.options);
  }
}
