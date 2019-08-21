import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {RouterModule} from '@angular/router';
import {SearchService} from './shared';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './shared/auth/auth.guard.service';
import {OAuthModule} from 'angular-oauth2-oidc';
import {LoginComponent} from './login/login.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material.module';
import {ConsentComponent} from './consent/consent.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    LoginComponent,
    ConsentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot([
      {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'consent', component: ConsentComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home'}])
  ],
  providers: [SearchService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
