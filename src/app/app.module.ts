import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { AppStoreModule } from './store/app-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    StoreDevtoolsModule.instrument(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
