import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'fog',
  styleUrls: ['./fog.component.scss'],
  templateUrl: './fog.component.html'
})
export class FoGComponent implements OnInit {

  constructor() {
    console.log('CONSTRUCTOR FoGComponent');
  }

  public ngOnInit() {
    console.log('OmInit FoGComponent');
  }

}
