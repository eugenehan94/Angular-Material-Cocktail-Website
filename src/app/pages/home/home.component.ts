import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentOnLoadComponent } from 'src/app/components/dialog-content-on-load/dialog-content-on-load.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hasInitialModalShown: any = this.getData();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // The dialog only shows once when user visits the site.
    if (!this.hasInitialModalShown) {
      this.openDialog();
      this.hasInitialModalShown = true
      this.setData(this.hasInitialModalShown)
    }
    // NOTE: Comment out "If(!this.hasInitialModalShown") and uncomment below to 
    // have modal to show everytime
    // this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(DialogContentOnLoadComponent, {
      width: '500px',
      // NOTE: "disableClose" prevents close when click in the background
      disableClose: true
    });
  }

  // Set the result in localStorage
  setData(data: any): void {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('hasInitialModalShown', jsonData)
  }

  // Get the result from localStorage
  getData() {
    return localStorage.getItem('hasInitialModalShown')
  }
}
