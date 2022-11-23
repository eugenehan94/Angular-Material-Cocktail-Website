import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
@Component({
  selector: 'app-home-first-component',
  templateUrl: './home-first-component.component.html',
  styleUrls: ['./home-first-component.component.css'],
})
export class HomeFirstComponentComponent implements OnInit {
  // breakpoint?: number;
  firstCardContent: any;
  secondCardContent: any;
  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    // this.breakpoint = window.innerWidth <= 700 ? 1 : 3;
    this.getFirstComponentCardOne();
    this.getFirstComponentCardTwo();
  }

  getFirstComponentCardOne() {
    this.service.getFirstComponentCardOne().subscribe((response) => {
      this.firstCardContent = response;
    });
  }
  getFirstComponentCardTwo(){
    this.service.getFirstComponentCardTwo().subscribe((response)=> {
      console.log("response: ", response)
      this.secondCardContent = response;
    })
  }
  // onResize(event: any) {
  //   this.breakpoint = event.target.innerWidth <= 700 ? 1 : 3;
  // }
}
