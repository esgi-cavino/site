import {Component} from '@angular/core';
import {ApplicationModel} from '../constants/generalconstants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  private isDisconnected = true;

  constructor() {
    if (localStorage.getItem('uuid') !== '') {
      this.isDisconnected = false;
    }
  }
  appliName = ApplicationModel.name;
}
