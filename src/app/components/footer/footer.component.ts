import { Component, OnInit, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  year: any;
  getScreenWidth: any;

  constructor(private _snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.getScreenWidth = window.innerWidth;
  }

  openPersonalWebsite(): void {
    window.open(
      'https://eugenehan.netlify.app/',
      '_blank',
      'noopener, noreferrer'
    );
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
  openSnackBar(message: string) {
    this._snackbar.open(message + ' Button Clicked', 'X', { duration: 3000 });
  }
}
