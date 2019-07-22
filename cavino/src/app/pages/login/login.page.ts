import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginResponse: Subscription;
  private token = '';
  private loginButtonStatus = false;
  private user = '';
  private password = '';

  constructor(
      private loginService: LoginService,
      private loadCtrl: LoadingController,
      private alrtCtrl: AlertController,
      private router: Router) {}

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

  goToHome() {
      this.router.navigateByUrl('/home');
  }

  connect(user: string, password: string) {

    this.loginButtonStatus = true;
    if (this.user === '' || this.password === '') {// Check if both email and password has been filled
      this.presentAlert('Erreur', 'Veuillez renseigner vos identifiants', null, ['ok']);
    } else if (localStorage.getItem('token') == null ||
        localStorage.getItem('token') === '') {// Check if no token has already been registered
      this.loginResponse = this.loginService.login(user, password)
          .subscribe((response) => {
            // this.presentAlert('Connected', 'connected', 'You are now connected', ['ok']);
            localStorage.setItem('token', response.token);
            localStorage.setItem('uuid', response.uuid);
          }).then(this.router.navigateByUrl('/home'));
    } else {
        this.presentAlert('Connected',
            'Already connected',
            'You are already connected with the token ' + localStorage.getItem('token'),
            ['ok']);
        location.reload();
        console.log('token : ' + this.token);
    }
    this.loginButtonStatus = false;
  }
}
