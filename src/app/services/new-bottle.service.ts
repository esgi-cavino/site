import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApplicationModel} from '../constants/generalconstants';

@Injectable({
  providedIn: 'root'
})
export class NewBottleService {

  private uuid = localStorage.getItem('uuid');
  private token = localStorage.getItem('token');
  private options = {headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'})};
  private newBottleUri =
      ApplicationModel.DefaultApplicationDetails.onlineUrl
      + ApplicationModel.DefaultApplicationDetails.createOneBottleRoute;

  constructor(private httpClient: HttpClient) { }

  registerNewBottle(name: string,
                    description: string,
                    price: number,
                    averagePrice: number,
                    isOrganic: boolean,
                    wineTypeId: number,
                    countryId: number,
                    regionId: number,
                    domainId: number,
                    vintageId: number): any {
    return this.httpClient.post(
        this.newBottleUri,
        {
          name,
          description,
          price,
          averagePrice,
          isOrganic,
          wineTypeId,
          regionId,
          countryId,
          domainId,
          vintageId
        }, this.options);
  }
}
