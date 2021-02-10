import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-header',
  templateUrl: './fixed-header.component.html',
  styleUrls: ['./fixed-header.component.scss'],
})
export class FixedHeaderComponent implements OnInit {
  openSubMenu: boolean = false;
  isCollapsed = false;
  ar = 'عربي';
  en = 'English';
  language = this.ar;
  constructor() {}

  ngOnInit(): void {}
  getMenuBack() {
    setTimeout(() => {
      this.openSubMenu = false;
    }, 1000);
  }

  selectArabic() {
    this.language = this.ar;
  }
  selectEnglish() {
    this.language = this.en;
  }
}
