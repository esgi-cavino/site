import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {BottlesService} from '../../services/bottles.service';

@Component({
  selector: 'app-bottles',
  templateUrl: './bottles.page.html',
  styleUrls: ['./bottles.page.scss'],
})
export class BottlesPage implements OnInit {

  private bottlesResponse: Subscription;
  private bottlesButtonStatus: boolean;
  private bottleList;

  constructor(private bottlesService: BottlesService) {}

  ngOnInit() {
  }

  getUserBottles() {
    this.bottlesResponse = this.bottlesService.getUserBottles(0, 20)
        .subscribe((data) => {
          console.log(data);
          this.bottleList = data;
        });
  }
}
