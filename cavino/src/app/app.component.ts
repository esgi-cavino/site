import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private token: string;
  public alreadyConnected: boolean;

  public offlineAppPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Connexion',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Inscription',
      url: '/register',
      icon: 'person'
    }
  ];

  public onlineAppPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Mes bouteilles',
      url: '/bottles',
      icon: 'wine'
    },
    {
      title: 'Profil',
      url: '/profile',
      icon: 'person'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
    if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== "") {
      this.token = localStorage.getItem("token");
      this.alreadyConnected = true;
    } else {
      this.token = "";
      this.alreadyConnected = false;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.token = "";
    localStorage.setItem("token", "");
    this.alreadyConnected = false;
    this.router.navigateByUrl('/home');
  }
}
