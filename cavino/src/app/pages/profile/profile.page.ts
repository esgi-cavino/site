import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userInfo: Observable<any>;
  uuid = localStorage.getItem('uuid');
  urlCall = 'https://esgi-cavino-api.herokuapp.com/api/user/' + this.uuid

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.userInfo = httpClient.get(this.urlCall);
    this.userInfo.subscribe(data => {
      console.log('La data : ', data);
    });
  }
  ngOnInit(): void {
  }
}
