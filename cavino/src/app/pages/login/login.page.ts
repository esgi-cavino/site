import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { Subscription } from "rxjs";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { MyConfig } from "../../config/config";
import {Router} from "@angular/router";
import {AppModule} from "../../app.module";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginResponse: Subscription;
  private userResponse: Subscription;
  private token: string = "";
  private loginButtonStatus: boolean = false;
  private user: string = "";
  private password: string = "";

  constructor(
      private userService: UserService,
      private loginService: LoginService,
      private loadCtrl: LoadingController,
      private alrtCtrl: AlertController,
      private router: Router,
      private appModule: AppModule) {}

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

    console.log("Le user : " + user + " et le password : " + password + "token : " + this.token);

    this.loginButtonStatus = true;
    if(this.user == "" || this.password == "")
    {
      this.presentAlert("Erreur", "Veuillez renseigner vos identifiants", null, ['ok']);
    }
    else if(localStorage.getItem("token") == null || localStorage.getItem("token") == "")
    {
      this.loginResponse = this.loginService.login(user, password)
          .subscribe((response) => {
            console.log(response.token);
            this.token = response.token;
            this.presentAlert("Connected", "connected", "You are now connected", ['ok']);
            localStorage.setItem("token", response.token);
            console.log("Le token from \"localStorage\" : " + localStorage.getItem("token"));
            this.userInfo(this.token);
            this.router.navigateByUrl('/home');
          });
    }
    else
      {
        this.presentAlert("Connected", "Already connected", "You are already connected with the token " + localStorage.getItem("token"), ['ok']);
        console.log("token : " + this.token);
    }
    this.loginButtonStatus = false;
  }

  userInfo(token: string) {
    this.userResponse = this.userService.getUserInfo(token)
        .subscribe((response) => {
          console.log(response.uuid);
          localStorage.setItem("uuid", response.uuid);
          localStorage.setItem("firstname", response.firstname);
          localStorage.setItem("lastname", response.lastname);
          localStorage.setItem("email", response.email);
          localStorage.setItem("createdAt", response.createdAt);
          localStorage.setItem("updatedAt", response.updatedAt);
        })
  }
}
