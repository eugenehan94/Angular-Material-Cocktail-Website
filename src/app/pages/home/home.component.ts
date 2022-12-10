import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
    // if (!this.hasInitialModalShown) {
    //   this.openDialog('1ms', '1ms');
    //   this.hasInitialModalShown = true
    //   this.setData(this.hasInitialModalShown)
    // }

    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(DialogContentOnLoadComponent, {
      width: '500px',
      // "disableClose" prevents close when click in the background
      disableClose: true
    });
  }

  setData(data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('hasInitialModalShown', jsonData)
  }
  getData() {
    return localStorage.getItem('hasInitialModalShown')
  }
}
