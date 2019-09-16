import { Component, OnInit } from '@angular/core';
import { HTTP } from "@ionic-native/http/ngx";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private toto: number;

  constructor() {
    this.toto = 0;
  }

  ngOnInit() {
  }

  connect() {
    this.toto++;
    console.log("Toto est ici pour " + this.toto + " fois.");
  }
}
