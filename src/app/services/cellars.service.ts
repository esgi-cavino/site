import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApplicationModel} from '../constants/generalconstants';

@Injectable({
  providedIn: 'root'
})
export class CellarsService {

  private uuid = localStorage.getItem('uuid');
  private token = localStorage.getItem('token');
  private options = {headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'})};
  private userCellarsUri =
      ApplicationModel.DefaultApplicationDetails.onlineUrl
      + ApplicationModel.DefaultApplicationDetails.getAllCellarsOfOneUserRoute
      + this.uuid;
  private cellarBottlesUri =
      ApplicationModel.DefaultApplicationDetails.onlineUrl
      + ApplicationModel.DefaultApplicationDetails.getAllCellarsRoute;
  private getOneCellarByIdUri =
      ApplicationModel.DefaultApplicationDetails.onlineUrl
      + ApplicationModel.DefaultApplicationDetails.getOneCellarRoute;
  private newCellarUri =
      ApplicationModel.DefaultApplicationDetails.onlineUrl
      + ApplicationModel.DefaultApplicationDetails.createOneCellarRoute;

  constructor(private http: HttpClient) { }

  public getUserCellars(): any {
    return this.http.get(this.userCellarsUri, this.options);
  }

  public getCellarBottles(id: string): any {
    return this.http.get(this.cellarBottlesUri + id);
  }

  public getOneCellarById(id: string) {
    return this.http.get(this.getOneCellarByIdUri + id, this.options);
  }

  public createNewCellar(name: string,
                         width: string,
                         height: string,
                         uuid: string) {
    return this.http.post(this.newCellarUri, {name, width, height, uuid}, this.options);
  }
}
