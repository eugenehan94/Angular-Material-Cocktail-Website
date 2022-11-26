import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-pages-first-component',
  templateUrl: './all-pages-first-component.component.html',
  styleUrls: ['./all-pages-first-component.component.css'],
})
export class AllPagesFirstComponentComponent implements OnInit {
  @Input() cardSubtitle?: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    // router.url returns /url - remove the /, then remove %20(this occurs when there is a space)
    // const routerUrl = this.router.url.substring(1).replace(/%20/, ' ');
    // then capitalize the first letter and attach the rest
    // const title = routerUrl.charAt(0).toUpperCase() + routerUrl.slice(1);
    this.cardSubtitle = this.cardSubtitle?.toUpperCase();
  }
}
