import {
    Component,
    OnInit
} from '@angular/core';
import { FoGService } from './fog.service';

@Component({
    selector: 'fog',
    templateUrl: './fog.component.html',
    styleUrls: ['./fog.component.scss'],
    providers: [FoGService]
})
export class FoGComponent implements OnInit {
    constructor() {
        console.log('constructor FoGComponent');
    }

    public ngOnInit() {
        console.log('ngOnInit FoGComponent');
    }

}
