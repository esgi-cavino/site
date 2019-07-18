import { Component, OnInit } from '@angular/core';
import {NewBottleService} from '../../services/new-bottle.service';

@Component({
  selector: 'app-new-bottle',
  templateUrl: './new-bottle.page.html',
  styleUrls: ['./new-bottle.page.scss'],
})
export class NewBottlePage implements OnInit {

  private newBottleButtonStatus: boolean;
  private name: string;
  private description: string;
  private price: number;
  private averagePrice: number;
  private isOrganic: boolean;
  private wineTypeId: number;
  private regionId: number;
  private countryId: number;
  private domainId: number;
  private vintageId: number;

  constructor(private newBottleService: NewBottleService) { }

  ngOnInit() {
  }

  createNewBottle(name: string,
                  description: string,
                  price: number,
                  averagePrice: number,
                  isOrganic: boolean,
                  wineTypeId: number,
                  countryId: number,
                  regionId: number,
                  domainId: number,
                  vintageId: number) {
    this.newBottleButtonStatus = true;
    this.newBottleService.registerNewBottle(name,
                                            description,
                                            price,
                                            averagePrice,
                                            isOrganic,
                                            wineTypeId,
                                            countryId,
                                            regionId,
                                            domainId,
                                            vintageId)
        .subscribe((data) => {
          console.log(data);
        });
  }

}
