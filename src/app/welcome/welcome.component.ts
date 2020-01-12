import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {
  welcome = I18n.get('Welcome');

  constructor() { }

  ngOnInit() {
  }

}
