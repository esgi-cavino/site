import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApplicationModel} from '../constants/generalconstants';

@Injectable({
  providedIn: 'root'
})
export class VintageService {

  private uuid = localStorage.getItem('uuid');
  private token = localStorage.getItem('token');
  private options = {headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'})};
  private vintageListUri =
      ApplicationModel.DefaultApplicationDetails.onlineUrl
      + ApplicationModel.DefaultApplicationDetails.vintageRoute
      + '?offset=0&limit=20';

  constructor(private http: HttpClient) { }

  public getVintageList(): any {
    return this.http.get(this.vintageListUri, this.options);
  }
}
