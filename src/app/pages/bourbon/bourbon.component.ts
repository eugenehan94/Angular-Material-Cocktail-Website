import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bourbon',
  templateUrl: './bourbon.component.html',
  styleUrls: ['./bourbon.component.css'],
})
export class BourbonComponent implements OnInit {
  pageTitle: string = 'Bourbon';
  pageDescription: string =
    'Celebrate America’s native spirit and find out more about one of the most popular spirits on the market. We have the newest bottles, industry trends and cocktail recipes to keep your love of the brown liquor going.';
  constructor() {}

  ngOnInit(): void {}
}
