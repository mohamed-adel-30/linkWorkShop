import { Component, Input, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss'],
})
export class CustomSliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    lazyLoad: true,
    lazyLoadEager: 2,
    autoWidth: false,

    items: 6,
    navText: ['', ''],
    // responsive: {
    //   0: {
    //     items: 3,
    //   },
    //   600: {
    //     items: 6,
    //   },
    // },
    nav: true,
  };

  @Input() sliderArr: any;
  constructor() {}

  ngOnInit(): void {}
}
