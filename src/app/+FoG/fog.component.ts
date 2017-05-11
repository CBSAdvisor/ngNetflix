import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'fog',
  templateUrl: './fog.component.html',
  styleUrls: ['./fog.component.scss']
})
export class FoGComponent implements OnInit {

  constructor() {
    console.log('CONSTRUCTOR FoGComponent');
  }

  public ngOnInit() {
    console.log('OmInit FoGComponent');
  }

}
