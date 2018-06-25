import { Injectable } from '@angular/core';

import { Translate_EN_TH } from '../languages/translation-en-th';
const dictionary = {
  'EN': 'default_language',
  'TH': Translate_EN_TH
};

import { CookieService } from './cookie.service';

@Injectable()
export class TranslationService {

  private language = 'EN';
  private currentDict;

  constructor(private _cookie: CookieService) { }

  setLanguage(language: string) {
    if (dictionary[language]!==undefined && this.language!==language) {
      this.currentDict = dictionary[language];
      this.language = language;
      this._cookie.setLanguageCookie(language);
    }
  }
  get getLanguage(): string {return this.language}

  translate(value: string): string {
    if (this.language==='EN') return value;
    else {
      let result = this.currentDict[value.toLowerCase()];
      return result!==undefined ? result : value;
    }
  }

}
