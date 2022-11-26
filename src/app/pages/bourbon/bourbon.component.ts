import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { retry } from 'rxjs/operators';
@Component({
  selector: 'app-bourbon',
  templateUrl: './bourbon.component.html',
  styleUrls: ['./bourbon.component.css'],
})
export class BourbonComponent implements OnInit {
  pageTitle: string = 'Bourbon';
  pageDescription: string =
    'Celebrate America’s native spirit and find out more about one of the most popular spirits on the market. We have the newest bottles, industry trends and cocktail recipes to keep your love of the brown liquor going.';
  cardContent?: any;
  cardContentError: boolean = false;

  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    this.getBourbonCard();
  }

  getBourbonCard() {
    this.service.getBourbonCard().pipe(retry(3)).subscribe({
      next: (response) => {
        this.cardContent = response;
      },
      error: (error) => {
        this.cardContent = true;
      }
    })
  }
}
