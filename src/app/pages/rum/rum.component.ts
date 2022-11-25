import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rum',
  templateUrl: './rum.component.html',
  styleUrls: ['./rum.component.css']
})
export class RumComponent implements OnInit {
  pageTitle: string = "Rum"
  constructor() { }

  ngOnInit(): void {
  }

}
