import { Component, Input, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.scss'],
})
export class NewsSliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    // items: 3,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
    nav: true,
  };
  customOptionsHospitals: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    // items: 3,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
    },
    nav: true,
  };
  @Input() newsArr: any;
  @Input() hospitals: any;

  constructor() {}

  ngOnInit(): void {}
}
