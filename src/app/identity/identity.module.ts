import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPortalComponent } from './signin-portal/signin-portal.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { services } from '.';

@NgModule({
  declarations: [SigninPortalComponent],
  imports: [
    CommonModule,
    AmplifyAngularModule,
    StoreModule.forFeature('identity', reducers)
    // EffectsModule.forFeature()
  ],
  providers: [AmplifyService, ...services],
  exports: [SigninPortalComponent, StoreModule]
})
export class IdentityModule { }
