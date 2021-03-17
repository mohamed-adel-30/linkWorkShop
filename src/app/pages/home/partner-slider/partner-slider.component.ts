import { Component, Input, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partner-slider',
  templateUrl: './partner-slider.component.html',
  styleUrls: ['./partner-slider.component.scss'],
  styles: [
    `
      :host >>> .carousel-inner {
        display: flex;
        justify-content: space-between !important;
      }
      :host >>> .carousel-indicators li {
        display: none !important;
      }
      :host >>> .carousel-control-next .carousel-control-next-icon {
        background-image: url(../../../../assets/icons/Group\ 19.jpg) !important;
      }
    `,
  ],
})
export class PartnerSliderComponent implements OnInit {
  // itemsPerSlide = 3;
  // singleSlideOffset = false;
  // noWrap = false;

  // slidesChangeMessage = '';
  // // customOptions: OwlOptions = {
  // //   loop: true,
  // //   mouseDrag: false,
  // //   touchDrag: false,
  // //   pullDrag: false,
  // //   dots: false,
  // //   navSpeed: 700,
  // //   navText: ['', ''],
  // //   responsive: {
  // //     0: {
  // //       items: 1,
  // //     },
  // //   },
  // //   nav: true,
  // // };
  @Input() h3: string;
  @Input() slider: any;
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
