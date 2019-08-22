import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-consent',
    templateUrl: './consent.component.html',
    styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {
    private redirectUri: string;
    private challenge: any;
    private requestedScope: string[];
    private clientName: any;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.challenge = params.consent_challenge;
            this.requestedScope = params.requested_scope;
            this.redirectUri = params.redirect_uri;
            this.clientName = params.client_name;
            console.log(this.challenge);
            console.log(this.redirectUri);
            console.log(this.requestedScope);
        });
    }

    onSubmit($event: any) {
        $event.target.submit();
    }
}
