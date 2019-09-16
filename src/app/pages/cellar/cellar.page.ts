import {Component, OnInit} from '@angular/core';
import {CellarsService} from '../../services/cellars.service';

@Component({
  selector: 'app-cellar',
  templateUrl: './cellar.page.html',
  styleUrls: ['./cellar.page.scss'],
})
export class CellarPage implements OnInit {

  constructor(private cellarsService: CellarsService) { }

  ngOnInit() {
  }

  public getOneCellarById(id: string) {
    this.cellarsService.getOneCellarById(id)
        .subscribe((data) => {
          console.log(data);
        });
  }

}
