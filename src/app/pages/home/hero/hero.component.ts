import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  styles: [
    `
      :host >>> .carousel {
        z-index: 3;
      }
      :host >>> .carousel-control span {
        /* font-size: 80px;
        color: #c8ff00;
        display: block;
        width: 50px;
        height: 50px;
        background: red;
        top: 46%;
        border-radius: 50%;
        line-height: 1; */
        display: none;
      }
      :host >>> .carousel-control span:before {
        display: none;
        /* line-height: 0.45; */
      }

      :host >>> .carousel-indicators li {
        width: 12px;
        height: 12px;
        margin: 0 10px;
        border-radius: 50%;
        border: 1px solid #1a325e;
      }

      :host >>> .carousel-indicators .active {
        border-color: white;
      }

      @media screen and (min-width: 600px) {
        :host >>> .carousel-indicators li {
          width: 16px;
          height: 16px;
          margin: 0 16px;
        }
      }
      @media screen and (min-width: 992px) {
        :host >>> .carousel-indicators {
          bottom: 10px;
        }

        :host >>> .carousel-indicators li {
          width: 18px;
          height: 18px;
          margin: 0 20px;
        }
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
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
