import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rye-whiskey',
  templateUrl: './rye-whiskey.component.html',
  styleUrls: ['./rye-whiskey.component.css']
})
export class RyeWhiskeyComponent implements OnInit {
  pageTitle: string = "Rye Whiskey";
  pageDescription: string = "Bourbon and scotch may be best-sellers, but rye whiskey is increasingly often the drink of choice for many whiskey connoisseurs. Find out the new bottles, recipes and brands to try."
  constructor() { }

  ngOnInit(): void {
  }

}
