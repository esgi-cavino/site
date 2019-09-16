import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {LoginService} from '../../services/login.service';
import {RegionService} from '../../services/region.service';
import {RegionList} from '../../models/region_list';
import {WineTypeList} from '../../models/wine_type_list';
import {WineTypeService} from '../../services/wine-type.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private userButtonStatus: boolean;

  private uuid: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private age: number;
  private adress: string;
  private isSeller: boolean;
  private isAdmin: boolean;
  private createdAt: string;
  private updatedAt: string;

  private regionList: RegionList;
  private wineTypeList: WineTypeList;
  private favoriteRegion: string;
  private favoriteWine: string;

  private date: string[];

  constructor(
      private loginService: LoginService,
      private userService: UserService,
      private regionService: RegionService,
      private wineTypeService: WineTypeService) {}

  ngOnInit() {
    this.uuid = localStorage.getItem('uuid');
    this.getUserInfo();
    this.getUserFavouriteWineTypes();
    this.regionService.getRegionsList()
        .subscribe((regionData) => {
            this.regionList = regionData;
        });
    this.wineTypeService.getWineTypeList()
        .subscribe((wineTypeData) => {
            this.wineTypeList = wineTypeData;
          });
  }

  getUserInfo() {
      this.userService.getUserInfo()
        .subscribe((response) => {
            this.uuid = response.uuid;
            this.firstName = response.firstname;
            this.lastName = response.lastname;
            this.email = response.email;
            this.age = response.age;
            this.adress = response.address;
            this.isSeller = response.isSeller;
            this.isAdmin = response.isAdmin;
            this.createdAt = response.createdAt.split('T', 1);
            this.updatedAt = response.updatedAt;
        });
  }

  getUserFavouriteWineTypes() {
      this.userService.getUserFavouriteWineTypes(this.uuid)
          .subscribe((response) => {
              console.log(response);
          });
  }
}
