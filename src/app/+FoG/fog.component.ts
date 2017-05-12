import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FoGService } from './fog.service';
import { FoGHero } from './FoG.model';

@Component({
  selector: 'fog',
  templateUrl: './fog.component.html',
  styleUrls: ['./fog.component.scss'],
  providers: [FoGService]
})
export class FoGComponent implements OnInit {
  public heroes$: Observable<FoGHero[]>;

  constructor(private fogService: FoGService) {
    console.log('CONSTRUCTOR FoGComponent');
    this.heroes$ = this.fogService.heroesCollection;
  }

  public ngOnInit() {
    console.log('OmInit FoGComponent');
    this.fogService.loadCollection();
  }

}
