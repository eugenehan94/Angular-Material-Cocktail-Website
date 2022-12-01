import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-pages-first-component',
  templateUrl: './all-pages-first-component.component.html',
  styleUrls: ['./all-pages-first-component.component.css'],
})
export class AllPagesFirstComponentComponent implements OnInit {
  // @Input() indicates the value is pass down from parent component.
  @Input() cardSubtitle?: string;
  @Input() cardContent: any;
  @Input() cardContentError?: boolean;
  @Input() cardContentLoaded?: boolean;

  constructor() {}

  ngOnInit(): void {
    this.cardSubtitle = this.cardSubtitle?.toUpperCase();
  }
}
