import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-message',
  templateUrl: './cookie-message.component.html',
  styleUrls: ['./cookie-message.component.css'],
})
export class CookieMessageComponent implements OnInit {
  hasCookieMessageShown?: any;
  cookieMessageOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.hasCookieMessageShown = this.getData();
  }

  closeCookieMessage(): void {
    this.setData(true);
    this.cookieMessageOpen = false;
  }

  setData(data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('hasCookieMessageShown', jsonData);
  }
  getData() {
    return localStorage.getItem('hasCookieMessageShown');
  }
}
