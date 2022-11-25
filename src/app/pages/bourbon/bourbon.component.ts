import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bourbon',
  templateUrl: './bourbon.component.html',
  styleUrls: ['./bourbon.component.css'],
})
export class BourbonComponent implements OnInit {
  pageTitle: string = 'Bourbon';
  constructor() {}

  ngOnInit(): void {}
}
