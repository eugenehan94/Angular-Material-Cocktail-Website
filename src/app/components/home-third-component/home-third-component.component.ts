import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-home-third-component',
  templateUrl: './home-third-component.component.html',
  styleUrls: ['./home-third-component.component.css'],
})
export class HomeThirdComponentComponent implements OnInit {
  cardContentLoaded: boolean = false;
  cardContent: any;
  cardContentError: boolean = false;

  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    this.getCardContent();
  }

  getCardContent() {
    this.service
      .getThirdComponentCard()
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
        complete: () => {},
      });
  }
}
