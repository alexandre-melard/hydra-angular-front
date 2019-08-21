import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private redirectUri: string;
  private challenge: any;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.challenge = params.login_challenge;
      this.redirectUri = params.redirect_uri;
      console.log(this.challenge);
      console.log(this.redirectUri);
    });
  }

  onSubmit($event: any) {
    $event.target.submit();
  }
}
