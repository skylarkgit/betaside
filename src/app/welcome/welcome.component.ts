import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { I18n } from 'aws-amplify';
import { ThemerService } from '../services/themer.service';
import { environment } from 'src/environments/environment';
import Amplify, { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {
  welcome = I18n.get('Welcome');
  lang = 'en';
  siginUri = `${environment.auth.uri}login?response_type=code&client_id=${environment.auth.clientId}&redirect_uri=${environment.auth.redirectUri}`;
  email = null;

  constructor(private cdr: ChangeDetectorRef, private amp: AmplifyService) { }

  ngOnInit() {
    this.setLanguage(this.lang);
    // this.amp.auth()
    // Auth.currentUserInfo().then(val => console.log(val));
    Auth.currentAuthenticatedUser().then(val => {
      this.email = val.attributes.email;
      this.cdr.detectChanges();
    });
    // Auth.currentSession().then(val => console.dir(val.getIdToken()));
  }

  toggleLanguage() {
    if (this.lang === 'en') {
      this.setLanguage('esp');
    } else {
      this.setLanguage('en');
    }
  }

  setLanguage(lang: string) {
    this.lang = lang;
    I18n.setLanguage(lang);
    this.welcome = I18n.get('Welcome');
    this.cdr.detectChanges();
  }
}
