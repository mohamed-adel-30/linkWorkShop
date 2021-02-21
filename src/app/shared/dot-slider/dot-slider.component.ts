import { Component, Input, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dot-slider',
  templateUrl: './dot-slider.component.html',
  styleUrls: ['./dot-slider.component.scss'],
})
export class DotSliderComponent implements OnInit {
  statisticsOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    // items: 6,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
    },
    nav: true,
  };

  meetingsOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
    nav: true,
  };

  @Input() meetingsArr: [];
  @Input() statisticsArr = [];
  constructor() {}

  ngOnInit(): void {}
}
