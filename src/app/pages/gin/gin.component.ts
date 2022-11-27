import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { retry } from 'rxjs/operators';
@Component({
  selector: 'app-gin',
  templateUrl: './gin.component.html',
  styleUrls: ['./gin.component.css'],
})
export class GinComponent implements OnInit {
  pageTitle: string = 'Gin';
  pageDescription: string =
    'Though gin may be grounded in the juniper berry, it can be made using a whole range of botanicals, opening the spirit up to a wide range of flavors. Find out the newest bottles, distillation trends and cocktail recipes to introduce you to a whole new world of the clear spirit.';
  cardContent: any;
  cardContentLoaded: boolean = false;
  cardContentError: boolean = false;
  tileContent: any;
  tileContentLoaded: boolean = false;
  tileContentError: boolean = false;
  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    this.getGinCard();
  }

  getGinCard() {
    this.service
      .getGinCard()
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
  getGinTile() {
    this.service.getGinTile().pipe(retry(3)).subscribe({
      
    })
  }
}
