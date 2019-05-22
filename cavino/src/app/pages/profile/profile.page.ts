import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private uuid: string;
  private firstname: string;

  constructor() {
    this.uuid = localStorage.getItem("uuid");
    this.uuid = localStorage.getItem("firstname");
    console.log("uuid : " + this.uuid + "\nfirstname : " + this.firstname);
  }

  ngOnInit() {
  }

}
