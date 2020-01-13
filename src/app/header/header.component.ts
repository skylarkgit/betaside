import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ThemerService } from '../services/themer.service';

@Component({
  selector: 'btsd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme: 'light' | 'dark' = 'light';

  constructor(private cdr: ChangeDetectorRef, private themerService: ThemerService) { }

  ngOnInit() {
    this.setTheme(this.theme);
  }

  toggleTheme() {
    if (this.theme === 'light') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  setTheme(theme) {
    this.theme = theme;
    this.themerService.switchTheme(theme);
    this.cdr.detectChanges();
  }

}
