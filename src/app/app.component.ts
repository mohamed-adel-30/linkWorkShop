import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './core/services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Health-News';
  dir: string;
  lang: string;
  constructor(
    public translate: TranslateService,
    private langService: TranslationService
  ) {
    this.langService.getCurrentLang().subscribe((res) => {
      this.translate.use(res.toString());
      if (res == 'ar') {
        this.dir = 'rtl';
        this.lang = 'ar';
      } else {
        this.dir = 'ltr';
        this.lang = 'en';
      }
    });
  }
  ngOnInit() {
    this.lang = localStorage.getItem('lang');
    if (this.lang == 'ar') {
      this.dir = 'rtl';
    } else {
      this.dir = 'ltr';
      this.lang = 'en';
    }
  }
}
