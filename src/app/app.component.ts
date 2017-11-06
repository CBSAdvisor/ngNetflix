import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { FuseSplashScreenService } from './core/services/splash-screen.service';

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

  constructor(private fuseSplashScreen: FuseSplashScreenService) {
  }

  public ngOnInit() {
  }
}
