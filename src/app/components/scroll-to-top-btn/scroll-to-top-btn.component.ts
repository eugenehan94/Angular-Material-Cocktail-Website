import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-btn',
  templateUrl: './scroll-to-top-btn.component.html',
  styleUrls: ['./scroll-to-top-btn.component.css'],
})
export class ScrollToTopBtnComponent implements OnInit {
  windowScrolled = false;
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      // this.windowScrolled = window.pageYOffset !== 0;
      this.windowScrolled = window.pageYOffset > 200;
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
