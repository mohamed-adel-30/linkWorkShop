import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit {
  @Input() newsArr = [];

  constructor() {}

  ngOnInit(): void {}
}
