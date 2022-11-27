import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-liqueur',
  templateUrl: './liqueur.component.html',
  styleUrls: ['./liqueur.component.css'],
})
export class LiqueurComponent implements OnInit {
  pageTitle: string = 'Liqueur';
  pageDescription: string =
    'From fruity and sweet to bitter and spicy, liqueurs can add depth to your cocktails and even be the star of your next drink. Find out what new bottles, recipes and brands to expand your liqueur universe.';
  cardContent: any;
  cardContentLoaded: boolean = false;
  cardContentError: boolean = false;
  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    this.getLiqueurCard();
  }

  getLiqueurCard() {
    this.service
      .getLiqueurCard()
      .pipe(retry(3))
      .subscribe({
        next: (response) => {
          this.cardContent = response;
          this.cardContentLoaded = true;
        },
        error: (error) => {
          this.cardContentError = true;
          this.cardContentLoaded = true;
        },
      });
  }
}
