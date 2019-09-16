import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../services/register.service';
import {Subscription} from 'rxjs';
import {AlertController, LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private registerResponse: Subscription;
  private token: string;
  private registerButtonStatus = false;
  private firstname = '';
  private lastname = '';
  private email = '';
  private password = '';
  private passwordbis = '';

  constructor(
      private registerService: RegisterService,
      private loadCtrl: LoadingController,
      private alrtCtrl: AlertController,
      private router: Router) { }

  ngOnInit() {
  }

  async presentAlert(header: string, subHeader: string, message: string, buttons: Array<string>) {
    const alert = await this.alrtCtrl.create({
      header,
      subHeader,
      message,
      buttons
    });

    await alert.present();
  }

  register(firstname: string, lastname: string, email: string, password: string) {
    this.registerButtonStatus = true;
    if (this.firstname === ''
        || this.lastname === ''
        || this.email === ''
        || this.password === ''
        || this.passwordbis === '') {// Checks if all fields have been filled
      this.presentAlert('Erreur',
          'Veuillez renseigner tous les champs, merci.',
          null,
          ['ok']);
      this.registerButtonStatus = false;
    } else if (this.password !== this.passwordbis) {
      this.presentAlert('Erreur',
          'Les mots de passe renseignés sont différents',
          null,
          ['ok']);
      this.registerButtonStatus = false;
    } else {
      this.registerResponse = this.registerService.register(firstname, lastname, email, password)
          .subscribe((response) => {
            console.log(response.token);
            this.token = response.token;
            this.presentAlert('Erreur',
                'Vous avez été enregistré en tant que ' + this.firstname + ' ' + this.lastname,
                null,
                ['ok']);
            localStorage.setItem('token', response.token);
            this.router.navigateByUrl('/home');
          });
      this.registerButtonStatus = false;
    }
  }
}
