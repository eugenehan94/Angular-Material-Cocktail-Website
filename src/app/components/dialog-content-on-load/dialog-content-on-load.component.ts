import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-content-on-load',
  templateUrl: './dialog-content-on-load.component.html',
  styleUrls: ['./dialog-content-on-load.component.css']
})
export class DialogContentOnLoadComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

}
