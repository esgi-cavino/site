import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import {AlertController, LoadingController } from '@ionic/angular';
import {UserService} from '../../services/user.service';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private userResponse: Subscription;
  private uuid: string;
  private urlCall: string;
  private userButtonStatus: boolean;

  private address: string;
  private age: string;
  private createdAt: Date;
  private email: string;
  private firstname: string;
  private isAdmin: boolean;
  private isSeller: boolean;
  private lastname: string;
  private updatedAt: Date;

  private defaultAddress = 'Votre adresse';

  // uuid = localStorage.getItem('uuid');

  constructor(
      private loginService: LoginService,
      private userService: UserService,
      private loadCtrl: LoadingController,
      private alrtCtrl: AlertController,
      private router: Router) {}

  ngOnInit() {
    this.uuid = 'f19cafae-231b-4f6e-bc5f-074e393337ca';
    this.urlCall = 'https://esgi-cavino-api.herokuapp.com/api/user/' + this.uuid;
    this.userButtonStatus = false;
    this.getUserInfo();
  }

  getUserInfo() {
    this.userResponse = this.userService.getUserInfo()
        .subscribe((response) => {
          console.log('La reponse : ', response);
          this.firstname = response.firstname;
          this.lastname = response.lastname;
          this.email = response.email;
          this.age = response.age;
          this.address = response.address;
          this.createdAt = response.createdAt;
        });
  }
}
