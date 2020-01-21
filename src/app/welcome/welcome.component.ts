import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ThemerService } from '../services/themer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {
  // welcome = I18n.get('Welcome');
  welcome = 'Welcome';
  lang = 'en';
  siginUri = `https://${environment.auth.uri}/login?response_type=code&client_id=${environment.auth.clientId}&redirect_uri=${environment.auth.redirectUri}`;
  email = null;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.setLanguage(this.lang);
    // this.amp.auth()
    // Auth.currentUserInfo().then(val => console.log(val));
    // Auth.currentAuthenticatedUser().then(val => {
    //   this.email = val.attributes.email;
    //   this.cdr.detectChanges();
    // });
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
    this.cdr.detectChanges();
  }
}
