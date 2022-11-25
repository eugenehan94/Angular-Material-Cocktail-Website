import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rye-whiskey',
  templateUrl: './rye-whiskey.component.html',
  styleUrls: ['./rye-whiskey.component.css']
})
export class RyeWhiskeyComponent implements OnInit {
  pageTitle: string = "Rye Whiskey"
  constructor() { }

  ngOnInit(): void {
  }

}
