import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthDispatcher } from '../store/services';

@Component({
  selector: 'btsd-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authDispatcher: AuthDispatcher) { }

  ngOnInit() {
    console.log('params', this.route.snapshot.queryParams.access_token);
    this.authDispatcher.loggedIn('abhay', this.route.snapshot.queryParams.access_token);
    this.router.navigate(['/']);
  }

}
