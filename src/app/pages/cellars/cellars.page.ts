import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CellarsService} from '../../services/cellars.service';
import {CellarList} from '../../models/cellar_list';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cellars',
  templateUrl: './cellars.page.html',
  styleUrls: ['./cellars.page.scss'],
})
export class CellarsPage implements OnInit {

  private cellarsResponse: Subscription;
  private cellarList: CellarList = new CellarList();
  private noCellars = true;

  constructor(private cellarService: CellarsService, private router: Router) { }

  ngOnInit() {
    this.getUserCellars();
  }

  public getUserCellars() {
    this.cellarService.getUserCellars()
        .subscribe((data) => {
            this.cellarList = data;
            console.log(this.cellarList);
        });
  }

  public goToCellar(id: string) {
      this.router.navigateByUrl('/cellar');
  }
}
