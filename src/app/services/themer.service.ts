import { Injectable } from '@angular/core';
import { THEMES } from 'src/themes/themes';

@Injectable({
  providedIn: 'root'
})
export class ThemerService {

  constructor() { }

  public switchTheme(theme: 'light' | 'dark') {
    switch (theme) {
      case 'dark':
        this.applyTheme(THEMES.dark);
        break;
      case 'light':
        this.applyTheme(THEMES.light);
        break;
    }
  }

  private applyTheme(theme) {
    Object.keys(theme).forEach(varName => document.documentElement.style.setProperty(`--${varName}`, theme[varName]));
  }
}
