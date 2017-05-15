import {
    Component,
    Input
} from '@angular/core';
import { FoGHero } from '../FoG.model';

@Component({
    selector: 'fog-hero-card-summary',
    templateUrl: './fog-hero-card-summary.component.html',
    styleUrls: ['./fog-hero-card-summary.component.scss']
})
export class FoGHeroCardSummaryComponent {
    @Input() public hero: FoGHero;
}
