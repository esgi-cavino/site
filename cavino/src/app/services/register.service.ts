import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationModel } from '../constants/generalconstants';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private registerUri = ApplicationModel.DefaultApplicationDetails.onlineUrl + ApplicationModel.DefaultApplicationDetails.registerRoute;

  constructor(private httpClient: HttpClient) {
  }

  register(firstname: string, lastname: string, email: string, password: string): any {
    return this.httpClient.post(
        this.registerUri,
        {
          firstname,
          lastname,
          email,
          password
        });
  }
}
