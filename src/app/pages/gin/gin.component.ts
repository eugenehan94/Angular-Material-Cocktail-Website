import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gin',
  templateUrl: './gin.component.html',
  styleUrls: ['./gin.component.css'],
})
export class GinComponent implements OnInit {
  pageTitle: string = 'Gin';
  pageDescription: string =
    'Though gin may be grounded in the juniper berry, it can be made using a whole range of botanicals, opening the spirit up to a wide range of flavors. Find out the newest bottles, distillation trends and cocktail recipes to introduce you to a whole new world of the clear spirit.';
  constructor() {}

  ngOnInit(): void {}
}
