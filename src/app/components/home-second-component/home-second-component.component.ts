import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home-second-component',
  templateUrl: './home-second-component.component.html',
  styleUrls: ['./home-second-component.component.css'],
})
export class HomeSecondComponentComponent implements OnInit {
  getScreenWidth: any;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message + ' Button Clicked', 'X', { duration: 3000 });
  }
}

// To get screen width with HostListener article
// https://www.positronx.io/angular-detect-width-and-height-of-screen-tutorial/
