import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-brandy',
  templateUrl: './brandy.component.html',
  styleUrls: ['./brandy.component.css'],
})
export class BrandyComponent implements OnInit {
  pageTitle: string = 'Brandy';
  pageDescription: string =
    "Brandy is produced by distilling wine and is typically taken as an after-dinner drink. The term 'brandy' also denotes liquors obtained from the wines of other fruits, and there are many types of brandy across the winemaking regions of the world, including cognac, Armagnac and pisco.";
  cardContent: any;
  cardContentError: boolean = false;
  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    this.getBrandyCard();
  }

  getBrandyCard() {
    this.service
      .getBrandyCard()
      .pipe(retry(3))
      .subscribe({
        next: (response) => {
          this.cardContent = response;
        },
        error: (error) => {
          this.cardContentError = true;
        },
      });
  }
}
