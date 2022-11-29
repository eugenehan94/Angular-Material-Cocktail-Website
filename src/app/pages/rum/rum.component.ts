import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rum',
  templateUrl: './rum.component.html',
  styleUrls: ['./rum.component.css'],
})
export class RumComponent implements OnInit {
  pageTitle: string = 'Rum';
  pageDescription: string =
    'Rum lovers around the world owe a great debt to a simple plant, the sugar cane, which creates two main types: light and dark. The longer it has been aged, the more color and flavor it picks up from the wood. No matter the color, most rum is still made from molasses, but some brands do use fresh sugar cane juice. Find out the new bottles, recipes and trends in the rum world.';
  cardContent: any;
  cardContentLoaded: boolean = false;
  cardContentError: boolean = false;

  tileContent: any;
  tileContentLoaded: boolean = false;
  tileContentError: boolean = false;
  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    this.getRumCard();
    this.getRumTile();
  }

  getRumCard() {
    this.service
      .getRumCard()
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
  getRumTile() {
    this.service.getRumTile().pipe(retry(3)).subscribe({
      next: (response) => {
        this.tileContent = response;
        this.tileContentLoaded = true;
      },
      error: (error) => {
        this.tileContentError = true;
        this.tileContentLoaded = true;
      }
    })
  }
}
