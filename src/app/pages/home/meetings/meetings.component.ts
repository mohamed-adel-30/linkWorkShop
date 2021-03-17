import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss'],
})
export class MeetingsComponent implements OnInit {
  @Input() meetings: [];
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
