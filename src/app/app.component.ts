/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'nfx-root',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public name = 'ngNatflix';

  constructor() {
  }

  public ngOnInit() {
  }
}
