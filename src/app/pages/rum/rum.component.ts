import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rum',
  templateUrl: './rum.component.html',
  styleUrls: ['./rum.component.css'],
})
export class RumComponent implements OnInit {
  pageTitle: string = 'Rum';
  pageDescription: string =
    'Rum lovers around the world owe a great debt to a simple plant, the sugar cane, which creates two main types: light and dark. The longer it has been aged, the more color and flavor it picks up from the wood. No matter the color, most rum is still made from molasses, but some brands do use fresh sugar cane juice. Find out the new bottles, recipes and trends in the rum world.';
  constructor() {}

  ngOnInit(): void {}
}
