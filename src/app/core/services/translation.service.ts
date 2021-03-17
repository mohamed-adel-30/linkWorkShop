import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  static currLang;
  private lang = new Subject<string>();
  constructor() {
    TranslationService.currLang = localStorage.getItem('lang');
  }

  changeLang() {
    let currLang = localStorage.getItem('lang');
    if (currLang) {
      if (currLang == 'ar') {
        currLang = 'en';
        localStorage.setItem('lang', currLang);
      } else {
        currLang = 'ar';
        localStorage.setItem('lang', currLang);
      }
    } else {
      currLang = 'ar';
      localStorage.setItem('lang', currLang);
    }

    TranslationService.currLang = currLang;
    this.lang.next(currLang);
  }

  getCurrentLang() {
    return this.lang;
  }
}
