import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css'],
})
export class SidenavContentComponent implements OnInit {

  // the @Output sends the value to the parent component. Refer to "app.component.ts"
  @Output() closeSidenav = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  toggleSidenav(value: boolean): void {
    this.closeSidenav.emit(value)
  }
}
