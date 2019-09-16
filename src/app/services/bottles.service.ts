import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApplicationModel} from '../constants/generalconstants';

@Injectable({
  providedIn: 'root'
})
export class BottlesService {

  private uuid = localStorage.getItem('uuid');
  private token = localStorage.getItem('token');
  private options = {headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'})};
  private userBottlesUri =
      ApplicationModel.DefaultApplicationDetails.onlineUrl
      + ApplicationModel.DefaultApplicationDetails.getAllBottlesRoute;

  constructor(private http: HttpClient) {}

  public getUserBottles(offset: number, limit: number): any {
    return this.http.get(this.userBottlesUri + '?offset=' + offset + '&limit=' + limit, this.options);
  }
}
