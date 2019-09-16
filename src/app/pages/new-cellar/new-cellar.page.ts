import {Component, OnInit} from '@angular/core';
import {CellarsService} from '../../services/cellars.service';

@Component({
  selector: 'app-new-cellar',
  templateUrl: './new-cellar.page.html',
  styleUrls: ['./new-cellar.page.scss'],
})
export class NewCellarPage implements OnInit {

  private name: string;
  private width: string;
  private height: string;
  private uuid: string;

  constructor(private cellarsService: CellarsService) { }

  ngOnInit() {
    this.uuid = localStorage.getItem('uuid');
    console.log('uuid : ', this.uuid);
  }

  createNewCellar(name: string,
                  width: string,
                  height: string) {
    this.cellarsService.createNewCellar(name, width, height, this.uuid)
        .subscribe((data) => {
          console.log(data);
        });
  }

}
