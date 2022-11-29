import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { retry } from 'rxjs/operators';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';

@Component({
  selector: 'app-scotch',
  templateUrl: './scotch.component.html',
  styleUrls: ['./scotch.component.css'],
})
export class ScotchComponent implements OnInit {
  pageTitle: string = 'Scotch';
  pageDescription: string =
    "One of the most sought-after spirits in the world, scotch can range from peaty to smoky and a whole range of flavors, depending on where and how it's made in Scotland. Find out the newest bottles and how to drink them, whether neat or in a cocktail.";
  cardContent: any;
  cardContentLoaded: boolean = false;
  cardContentError: boolean = false;
  tileContent: any;
  tileContentLoaded: boolean = false;
  tileContentError: boolean = false;
  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    this.getScotchCard();
    this.getScotchTile();
  }

  getScotchCard() {
    this.service
      .getScotchCard()
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
  getScotchTile() {
    this.service
      .getScotchTile()
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
