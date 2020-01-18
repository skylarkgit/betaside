import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Amplify, { Auth } from 'aws-amplify';
import { AuthDispatcher } from '../store/services';

@Component({
  selector: 'btsd-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: Router, private authDispatcher: AuthDispatcher) { }

  ngOnInit() {
    // this.route.params.subscribe(param => console.log(param));
    // this.route.``
    this.authDispatcher.loggedIn('abhay');
    this.route.navigate(['/']);
  }

}
