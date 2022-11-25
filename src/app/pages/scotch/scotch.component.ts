import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scotch',
  templateUrl: './scotch.component.html',
  styleUrls: ['./scotch.component.css']
})
export class ScotchComponent implements OnInit {
  pageTitle: string = "Scotch";
  constructor() { }

  ngOnInit(): void {
  }

}
