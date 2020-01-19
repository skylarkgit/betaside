import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { verifyIdentity } from '../identity/store/actions/signin.actions';
import { IdentityState } from '../identity/types';
import { IdentityDispatcher } from '../identity/store/services';

@Component({
  selector: 'btsd-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: Router, private identityDispatcher: IdentityDispatcher) { }

  ngOnInit() {
    // this.route.params.subscribe(param => console.log(param));
    // this.route.``
    // this.store.dispatch(verifyIdentity());
    this.identityDispatcher.verifyLogin();
    this.route.navigate(['']);
  }

}
