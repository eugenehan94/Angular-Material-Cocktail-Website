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
  cardContentLoaded: boolean = false;
  cardContentError: boolean = false;

  tileContent?: any;
  tileContentLoaded: boolean = false;
  tileContentError: boolean = false;

  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    this.getBourbonCard();
    this.getBourbonTile();
  }

  getBourbonCard() {
    this.service.getBourbonCard().pipe(retry(3)).subscribe({
      next: (response) => {
        this.cardContent = response;
        this.cardContentLoaded = true;
      },
      error: (error) => {
        this.cardContentError = true;
        this.cardContentLoaded = true;
      }
    })
  }
  getBourbonTile(){
    this.service.getBourbonTiles().pipe(retry(3)).subscribe({
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
