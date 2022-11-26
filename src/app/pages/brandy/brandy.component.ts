import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandy',
  templateUrl: './brandy.component.html',
  styleUrls: ['./brandy.component.css']
})
export class BrandyComponent implements OnInit {
  pageTitle: string = "Brandy";
  pageDescription: string = "Brandy is produced by distilling wine and is typically taken as an after-dinner drink. The term 'brandy' also denotes liquors obtained from the wines of other fruits, and there are many types of brandy across the winemaking regions of the world, including cognac, Armagnac and pisco."
  constructor() { }

  ngOnInit(): void {
  }

}
