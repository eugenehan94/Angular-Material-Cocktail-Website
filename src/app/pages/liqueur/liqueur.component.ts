import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liqueur',
  templateUrl: './liqueur.component.html',
  styleUrls: ['./liqueur.component.css'],
})
export class LiqueurComponent implements OnInit {
  pageTitle: string = 'Liqueur';
  pageDescription: string =
    'From fruity and sweet to bitter and spicy, liqueurs can add depth to your cocktails and even be the star of your next drink. Find out what new bottles, recipes and brands to expand your liqueur universe.';
  constructor() {}

  ngOnInit(): void {}
}
