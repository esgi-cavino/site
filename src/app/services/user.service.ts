import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApplicationModel} from '../constants/generalconstants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uuid = localStorage.getItem('uuid');
  private token = localStorage.getItem('token');
  private options = {headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'})};
  private userDataUri = ApplicationModel.DefaultApplicationDetails.onlineUrl
      + ApplicationModel.DefaultApplicationDetails.getOneUserRoute
      + localStorage.getItem('uuid');
  private userFavouriteWineTypesUri = ApplicationModel.DefaultApplicationDetails.onlineUrl
      + ApplicationModel.DefaultApplicationDetails.getAllFafouriteWinesOfOneUserRoute;

  constructor(private http: HttpClient) {
  }

  getUserInfo(): any {
    return this.http.get(this.userDataUri, this.options);
  }

  editUserInfo(): any {
    return this.http.patch(this.userDataUri, this.options);
  }

  getUserFavouriteWineTypes(uuid: string) {
      return this.http.get(this.userFavouriteWineTypesUri + uuid, this.options);
  }
}
