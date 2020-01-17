import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Amplify, { Auth } from 'aws-amplify';

@Component({
  selector: 'btsd-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    // this.route.params.subscribe(param => console.log(param));
    // this.route.``
    this.route.navigate(['/']);
  }

}
