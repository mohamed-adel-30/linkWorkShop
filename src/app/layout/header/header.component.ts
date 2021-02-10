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
  showSubMenu(e) {
    // if (e.target.nextSibling.style.display == 'none') {
    //   e.target.nextSibling.style.display = 'flex';
    // } else if (e.target.nextSibling.style.display == 'flex') {
    //   e.target.nextSibling.style.display = 'none';
    // }
    console.log(e.target.nextSibling, e.target.previousSibling);
  }
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
