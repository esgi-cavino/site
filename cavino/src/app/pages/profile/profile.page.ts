import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
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
  }

  getUserInfo() {
    this.userResponse = this.userService.getUserInfo()
        .subscribe((response) => {
          console.log('La reponse : ', response);
        });
  }
}
