import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-page-header-toolbar',
    styleUrls: ['./app-page-header-toolbar.component.scss'],
    templateUrl: `./app-page-header-toolbar.component.html`
})
export class AppPageHeaderToolbarComponent implements OnInit {

    constructor() {
        console.log('constructor AppPageHeaderToolbarComponent');
    }

    public ngOnInit() {
        console.log('ngOnInit AppPageHeaderToolbarComponent');
    }
}
