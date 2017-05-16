/**
 * Angular 2 decorators and services
 */
import {
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppState } from './app.service';
import {
    AppPageHeaderToolbarModule,
    AppPageHeaderToolbarService
} from './+app-page-header-toolbar';
import { Observable } from 'rxjs/Observable';
import { MdSidenav } from '@angular/material';

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.scss'],
    templateUrl: `./app.component.html`,
    providers: [...AppPageHeaderToolbarModule.forRoot().providers]
})
export class AppComponent implements OnInit {
    @ViewChild('sideNav') private sideNav: MdSidenav;

    constructor(public appState: AppState,
                private router: Router,
                private appPageHeaderToolbarService: AppPageHeaderToolbarService) {
    }

    public ngOnInit() {
        console.log('ON INIT AppComponent');

        this.appPageHeaderToolbarService.changeTitle('NETFLIX');
        this.appPageHeaderToolbarService.changeSubtitle('');

        this.router.events.subscribe(event => {
            console.log(`ROUTER Changed AppComponent`);

            if (event instanceof NavigationEnd) {
                this.appPageHeaderToolbarService.setOnToggleMenuHandler(_ => {
                    this.sideNav.toggle();
                });
            }
        });
    }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
