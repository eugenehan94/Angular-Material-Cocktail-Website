import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-pages-third-component',
  templateUrl: './all-pages-third-component.component.html',
  styleUrls: ['./all-pages-third-component.component.css'],
})
export class AllPagesThirdComponentComponent implements OnInit {
  getScreenWidth: any;
  cardTitle?: string;

  @Input() tileContent: any;
  @Input() tileContentLoaded?: boolean;
  @Input() tileContentError?: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;

    // router.url returns /url - remove the /, then remove %20(this occurs when there is a space)
    const routerUrl = this.router.url.substring(1).replace(/%20/, ' ');
    // then capitalize the first letter and attach the rest
    const title = routerUrl.charAt(0).toUpperCase() + routerUrl.slice(1);
    this.cardTitle = title.toUpperCase();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
