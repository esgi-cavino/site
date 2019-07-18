import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {BottleService} from '../../services/bottle.service';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.page.html',
  styleUrls: ['./bottle.page.scss'],
})
export class BottlePage implements OnInit {

  private bottleResponse = Subscription;

  constructor() {}

  ngOnInit() {
  }
}
