import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogContentOnLoadComponent } from 'src/app/components/dialog-content-on-load/dialog-content-on-load.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog('1ms', '1ms');
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    // <button mat-raised-button (click)="openDialog('0ms', '0ms')">Open dialog without animation</button>
    this.dialog.open(DialogContentOnLoadComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration
    })
  }
}
