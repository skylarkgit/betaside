import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { I18n } from 'aws-amplify';
import { ThemerService } from '../services/themer.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {
  welcome = I18n.get('Welcome');
  lang = 'en';

  constructor(private cdr: ChangeDetectorRef, private themerService: ThemerService) { }

  ngOnInit() {
    this.setLanguage(this.lang);
  }

  toggleLanguage() {
    if (this.lang === 'en') {
      this.setLanguage('esp');
      this.themerService.switchTheme('light');
    } else {
      this.setLanguage('en');
      this.themerService.switchTheme('dark');
    }
  }

  setLanguage(lang: string) {
    this.lang = lang;
    I18n.setLanguage(lang);
    this.welcome = I18n.get('Welcome');
    this.cdr.detectChanges();
  }
}
