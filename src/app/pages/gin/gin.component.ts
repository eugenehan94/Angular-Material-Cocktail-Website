import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gin',
  templateUrl: './gin.component.html',
  styleUrls: ['./gin.component.css']
})
export class GinComponent implements OnInit {
  pageTitle: string = "Gin";
  constructor() { }

  ngOnInit(): void {
  }

}
