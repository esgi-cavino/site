import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { UserService } from "../../services/user.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private uuid: string;
  private firstname: string;
  private lastname: string;
  private createdAt: string;

  private userResponse: Subscription;

  constructor(private userService: UserService, private httpClient: HttpClient) {
    this.uuid = localStorage.getItem("uuid");
    this.firstname = localStorage.getItem("firstname");
    this.lastname = localStorage.getItem("lastname");
    this.createdAt = localStorage.getItem("createdAt");
    console.log("uuid : " + this.uuid + "\nfirstname : " + this.firstname);
  }

  ngOnInit() {
    this.userInfo();
  }

  userInfo() {
    localStorage.setItem("uuid", "b346f5d3-5a80-4f73-b689-94fa888afb87");
    console.log("localStorage.uuid : " + localStorage.getItem("uuid"));

    if(localStorage.getItem("uuid") == null || localStorage.getItem("uuid") == "") {
    } else {
      this.userResponse = this.httpClient.get('localhost:8080/api/user/b346f5d3-5a80-4f73-b689-94fa888afb87')
          .subscribe(response => {
            console.log('my data: ', response);
          })
    }
  }
}
