import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  openSubMenu: boolean = false;
  isCollapsed = false;
  ar = 'عربي';
  en = 'English';
  language = this.ar;

  constructor() {}

  ngOnInit(): void {}

  getMenuBack() {
    this.openSubMenu = false;
    this.isCollapsed = !this.isCollapsed;
  }

  selectlang(lang) {
    console.log(lang.title);

    if (lang.title == 'arabic') {
      this.language = this.ar;
    } else if (lang.title == 'english') {
      this.language = this.en;
    }
  }
}
