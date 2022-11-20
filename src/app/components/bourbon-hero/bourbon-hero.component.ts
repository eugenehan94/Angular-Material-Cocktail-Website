import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-bourbon-hero',
  templateUrl: './bourbon-hero.component.html',
  styleUrls: ['./bourbon-hero.component.css']
})
export class BourbonHeroComponent implements OnInit {
  getScreenWidth: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(){
    this.getScreenWidth = window.innerWidth;
  }

}

// Getting the url article referenced:
// https://www.tektutorialshub.com/angular/how-to-get-the-current-route-or-url-in-angular/