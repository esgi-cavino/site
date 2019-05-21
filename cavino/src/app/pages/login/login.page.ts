import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { Subscription } from "rxjs";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import {and} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private toto: number;
  private loginResponse: Subscription;
  private token: string = "none";
  private loginButtonStatus: boolean = false;
  private user: string = "";
  private password: string = "";

  constructor(
      private loginService: LoginService,
      private loadCtrl: LoadingController,
      private alrtCtrl: AlertController) {
    this.toto = 0;
  }

  ngOnInit() {
  }

  async presentAlert(header: string, subHeader: string, message: string, buttons: Array<string>) {
    const alert = await this.alrtCtrl.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: buttons
    });

    await alert.present();
  }

  connect(user: string, password: string) {
    this.loginButtonStatus = true;
    if(this.token == "none" && this.user != null && this.password != null) {
      this.loginResponse = this.loginService.login(user, password)
          .subscribe((response) => {
            console.log(response.token);
            this.token = response.token;
            this.presentAlert("Connected", "connected", "You are now connected", ['ok']);
          });
    } else {
      this.presentAlert("Connected", "Already connected", "You are already connected", ['ok']);
    }
    this.loginButtonStatus = false;
  }
}
