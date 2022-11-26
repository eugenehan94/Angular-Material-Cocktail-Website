import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scotch',
  templateUrl: './scotch.component.html',
  styleUrls: ['./scotch.component.css'],
})
export class ScotchComponent implements OnInit {
  pageTitle: string = 'Scotch';
  pageDescription: string =
    "One of the most sought-after spirits in the world, scotch can range from peaty to smoky and a whole range of flavors, depending on where and how it's made in Scotland. Find out the newest bottles and how to drink them, whether neat or in a cocktail.";
  constructor() {}

  ngOnInit(): void {}
}
