import { Component, OnInit } from '@angular/core';
import {NewBottleService} from '../../services/new-bottle.service';
import {Router} from '@angular/router';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-new-bottle',
  templateUrl: './new-bottle.page.html',
  styleUrls: ['./new-bottle.page.scss'],
})
export class NewBottlePage implements OnInit {

  private newBottleButtonStatus: boolean;
  private regionList;
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

  constructor(
      private newBottleService: NewBottleService,
      private regionService: RegionService,
      private router: Router) { }

  ngOnInit() {
    this.regionService.getRegionsList()
        .subscribe((data) => {
          this.regionList = data;
          console.log(this.regionList);
        });
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
    this.newBottleButtonStatus = false;
  }

}
