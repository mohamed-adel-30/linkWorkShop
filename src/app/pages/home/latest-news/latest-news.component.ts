import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit {
  @Input() newsArr = [];
  lang: string;
  dir: string;

  constructor() {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
    if (this.lang == 'ar') {
      this.dir = 'rtl';
    } else {
      this.dir = 'ltr';
      this.lang = 'en';
    }
  }
}
