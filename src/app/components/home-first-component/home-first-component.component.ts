import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-first-component',
  templateUrl: './home-first-component.component.html',
  styleUrls: ['./home-first-component.component.css'],
})
export class HomeFirstComponentComponent implements OnInit {
  breakpoint?: number;
  constructor() {}

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 700 ? 1 : 3;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 700 ? 1 : 3;
  }
}
