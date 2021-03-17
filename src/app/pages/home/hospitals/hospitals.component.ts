import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit {
  @Input() hospitals: any;
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
