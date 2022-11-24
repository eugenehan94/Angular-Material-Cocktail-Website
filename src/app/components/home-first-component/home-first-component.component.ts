import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { retry } from 'rxjs/operators';
@Component({
  selector: 'app-home-first-component',
  templateUrl: './home-first-component.component.html',
  styleUrls: ['./home-first-component.component.css'],
})
export class HomeFirstComponentComponent implements OnInit {
  // breakpoint?: number;
  firstCardContentLoaded: boolean = false;
  firstCardContent: any;
  firstCardContentError: boolean = false;

  secondCardContent: any;
  secondCardContentError: boolean = false;

  thirdCardContent: any;
  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    // this.breakpoint = window.innerWidth <= 700 ? 1 : 3;
    this.getFirstComponentCardOne();
    this.getFirstComponentCardTwo();
    this.getFirstComponentCardThree();
  }

  getFirstComponentCardOne() {
    this.service
      .getFirstComponentCardOne()
      .pipe(retry(3))
      .subscribe({
        next: (response) => {
          this.firstCardContent = response;
          this.firstCardContentLoaded = true
        },
        error: (error) => {
          this.firstCardContentError = true;
          this.firstCardContentLoaded = true;
        },
        complete: () => console.log('getFirstComponentCardOne completed'),
      });
  }
  getFirstComponentCardTwo() {
    this.service
      .getFirstComponentCardTwo()
      .pipe(retry(3))
      .subscribe({
        next: (response) => {
          this.secondCardContent = response;
        },
        error: (error) => {
          this.secondCardContentError = true;
        },
        complete: ()=> console.log('getFirstComponentCardTwo completed')
      });
  }
  getFirstComponentCardThree() {
    this.service.getFirstComponentCardThree().subscribe((response) => {
      this.thirdCardContent = response;
    });
  }
  // onResize(event: any) {
  //   this.breakpoint = event.target.innerWidth <= 700 ? 1 : 3;
  // }
}

// Article in error handling:
// https://blog.angular-university.io/rxjs-error-handling/
// https://rxjs.dev/deprecations/subscribe-arguments - above article method is depricated
