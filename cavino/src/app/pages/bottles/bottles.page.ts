import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottles',
  templateUrl: './bottles.page.html',
  styleUrls: ['./bottles.page.scss'],
})
export class BottlesPage implements OnInit {

  public bottles = [
    {
      name: 'Chateau neuf du pape',
      color: 'red',
      image: 'none',
      subtitle: 'The famous wine',
      description: "The description of the most famous wine in the world"
    },
    {
      name: 'Chablis',
      color: 'white',
      image: 'none',
      subtitle: 'The famous wine',
      description: "The description of the most famous wine in the world"
    },
    {
      name: 'Cotes de Provence',
      color: 'roré',
      image: 'none',
      subtitle: 'The famous wine',
      description: "The description of the most famous wine in the world"
    }
  ];

  constructor() {
    for (var i = 0; i < 10; i++) {
      this.bottles.push({
        name: 'name' + i,
        color: 'color' + i,
        image: 'image' + i,
        subtitle: 'subtitle' + i,
        description: "The description of the most famous wine in the world" + i
      });
    }
  }

  ngOnInit() {
  }

  onLoadBottle(name: string) {

  }

}
