import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApplicationModel} from '../constants/generalconstants';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private uuid = localStorage.getItem('uuid');
  private token = localStorage.getItem('token');
  private options = {headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'})};
  private countryListUri =
      ApplicationModel.DefaultApplicationDetails.onlineUrl
      + ApplicationModel.DefaultApplicationDetails.countryRoute
      + '?offset=0&limit=20';

  constructor(private http: HttpClient) { }

  public getCountryList(): any {
    return this.http.get(this.countryListUri, this.options);
  }
}
