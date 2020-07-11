import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ThemerService } from '../services/themer.service';
import { environment } from 'src/environments/environment';
import { UserSelector } from '../store/services/user.selector';
import { AuthService } from '../services/auth.service';

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
  siginUri = environment.auth.uri;
  user = null;

  constructor(private cdr: ChangeDetectorRef, private userSelector: UserSelector, private authService: AuthService) { }

  ngOnInit() {
    this.setLanguage(this.lang);
    this.userSelector.user$.subscribe(d => console.log(d, 'user'));
    this.authService.getUserDetails().subscribe(u => {
      this.user = {
        username: u.username
      };
      this.cdr.detectChanges();
      console.log(this.user, 'user');
    });
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
