import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-pages-hero',
  templateUrl: './all-pages-hero.component.html',
  styleUrls: ['./all-pages-hero.component.css'],
})
export class AllPagesHeroComponent implements OnInit {

  @Input() title?: string;
  @Input() description?: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    // // router.url returns /url - remove the /, then remove %20(this occurs when there is a space)
    // const routerUrl = this.router.url.substring(1).replace(/%20/, " ")
    // // then capitalize the first letter and attach the rest
    // this.title = routerUrl.charAt(0).toUpperCase() + routerUrl.slice(1)
  }
}


// Captialize every word article:
// https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/