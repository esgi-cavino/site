import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Subscription} from 'rxjs';
import {AlertController, LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

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
  private alreadyConnected = false;
  private connectedUser: User;

  constructor(
      private loginService: LoginService,
      private loadCtrl: LoadingController,
      private alrtCtrl: AlertController,
      private router: Router,
      private userService: UserService) {}

  ngOnInit() {
    if (localStorage.getItem('token') !== '') {
      this.router.navigateByUrl('/home');
    }
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

  connect(user: string, password: string) {

    this.loginButtonStatus = true;
    if (this.user === '' || this.password === '') {// Check if both email and password has been filled
      this.presentAlert('Erreur', 'Veuillez renseigner vos identifiants', null, ['ok']);
    } else if (localStorage.getItem('token') == null ||
        localStorage.getItem('token') === '') {// Check if no token has already been registered
      this.loginResponse = this.loginService.login(user, password)
          .subscribe((response) => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('uuid', response.uuid);
          });
      this.userService.getUserInfo()
          .subscribe((userData) => {
              localStorage.setItem('isAdmin', userData.isAdmin);
              console.log(userData);
            });
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
