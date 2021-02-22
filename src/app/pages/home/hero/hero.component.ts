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
        border-radius: 50%;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
