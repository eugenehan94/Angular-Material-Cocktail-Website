import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-second-component',
  templateUrl: './home-second-component.component.html',
  styleUrls: ['./home-second-component.component.css']
})
export class HomeSecondComponentComponent implements OnInit {

  getScreenWidth: any;

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth
  }

  @HostListener("window:resize", ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

}


// To get screen width with HostListener article
// https://www.positronx.io/angular-detect-width-and-height-of-screen-tutorial/