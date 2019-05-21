import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../services/register.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private firstname: string = "";
  private lastname: string = "";
  private email: string = "";
  private password: string = "";
  private password_bis: string = "";

  private registerButtonStatus: boolean = false;
  private registerResponse: Subscription;
  private token: string = "";

  constructor(
      private registerService: RegisterService,
      private loadCtrl: LoadingController,
      private alrtCtrl: AlertController) { }

  ngOnInit() {
  }

  register(firstname: string, lastname: string, email: string, password: string) {
    if(this.password != this.password_bis) {
      console.log("Mots de passe différents.")
    } else {
      this.registerButtonStatus = true;
      this.registerResponse = this.registerService.register(firstname, lastname, email, password)
          .subscribe((response) => {
            console.log(response.token);
            this.token = response.token;
          });
      this.registerButtonStatus = false;
    }
  }
}
