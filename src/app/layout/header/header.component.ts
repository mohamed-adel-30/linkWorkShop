import { Component, OnInit, Output } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/core/services/translation.service';

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
  // language = this.ar;
  language: string;

  constructor(
    private langService: TranslationService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.language = localStorage.getItem('lang');
    this.langService.getCurrentLang().subscribe((res) => {
      this.translate.use(res.toString());
      this.language = res;
      console.log(this.language);
    });
    console.log(this.language);
  }

  getMenuBack() {
    this.openSubMenu = false;
    this.isCollapsed = !this.isCollapsed;
  }

  selectlang(lang) {
    if (lang.title == 'arabic') {
      this.language = this.ar;
    } else if (lang.title == 'english') {
      this.language = this.en;
    }
    this.langService.changeLang();
  }
}
