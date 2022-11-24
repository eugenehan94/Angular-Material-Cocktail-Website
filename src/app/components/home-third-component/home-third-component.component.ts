import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-home-third-component',
  templateUrl: './home-third-component.component.html',
  styleUrls: ['./home-third-component.component.css'],
})
export class HomeThirdComponentComponent implements OnInit {
  cardContent: any;
  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    this.getCardContent();
  }

  getCardContent() {
    this.service.getThirdComponentCard().subscribe((response) => {
      this.cardContent = response;
    });
  }
}
