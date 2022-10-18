import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() openSidenav = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  toggleSidenav(input: boolean): void {
    this.openSidenav.emit(input);
  }
}
