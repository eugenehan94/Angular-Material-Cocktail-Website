import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandy',
  templateUrl: './brandy.component.html',
  styleUrls: ['./brandy.component.css']
})
export class BrandyComponent implements OnInit {
  pageTitle: string = "Brandy"
  constructor() { }

  ngOnInit(): void {
  }

}
