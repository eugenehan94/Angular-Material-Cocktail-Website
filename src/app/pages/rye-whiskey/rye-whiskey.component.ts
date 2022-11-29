import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rye-whiskey',
  templateUrl: './rye-whiskey.component.html',
  styleUrls: ['./rye-whiskey.component.css'],
})
export class RyeWhiskeyComponent implements OnInit {
  pageTitle: string = 'Rye Whiskey';
  pageDescription: string =
    'Bourbon and scotch may be best-sellers, but rye whiskey is increasingly often the drink of choice for many whiskey connoisseurs. Find out the new bottles, recipes and brands to try.';
  cardContent: any;
  cardContentLoaded: boolean = false;
  cardContentError: boolean = false;

  tileContent: any;
  tileContentLoaded: boolean = false;
  tileContentError: boolean = false;
  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    this.getRyeWhiskeyCard();
    this.getRyeWhiskeyTile();
  }
  getRyeWhiskeyCard() {
    this.service
      .getRyeWhiskeyCard()
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
  getRyeWhiskeyTile() {
    this.service
      .getRyeWhiskeyTile()
      .pipe(retry(3))
      .subscribe({
        next: (response) => {
          this.tileContent = response;
          this.tileContentLoaded = true;
        },
        error: (error) => {
          this.tileContentError = true;
          this.tileContentLoaded = true;
        },
      });
  }
}
