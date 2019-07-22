import { Component, OnInit } from '@angular/core';
import {NewBottleService} from '../../services/new-bottle.service';
import {Router} from '@angular/router';
import {RegionService} from '../../services/region.service';
import {RegionList} from "../../models/region_list";
import {CountryService} from "../../services/country.service";
import {CountryList} from "../../models/country_list";
import {DomainService} from "../../services/domain.service";
import {DomainList} from "../../models/domain_list";

@Component({
  selector: 'app-new-bottle',
  templateUrl: './new-bottle.page.html',
  styleUrls: ['./new-bottle.page.scss'],
})
export class NewBottlePage implements OnInit {

  private newBottleButtonStatus: boolean;
  private regionList: RegionList;
  private countryList: CountryList;
  private domainList: DomainList;
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
      private countryService: CountryService,
      private domainService: DomainService,
      private router: Router) { }

  ngOnInit() {
    this.regionService.getRegionsList()
        .subscribe((regionData) => {
          this.regionList = regionData;
          console.log(this.regionList);
        });
    this.countryService.getCountryList()
        .subscribe((countryData) => {
          this.countryList = countryData;
          console.log(this.countryList);
        });
    this.domainService.getDomainList()
        .subscribe((domainData) => {
            this.domainList = domainData;
            console.log(this.domainList);
        })
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
