import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { fuseAnimations } from '../../core/animations';
// import { FuseConfigService } from '../../core/services/config.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'nfx-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  // animations: fuseAnimations
})
export class NfxContentComponent implements OnInit, OnDestroy {
  public onSettingsChanged: Subscription;
  public fuseSettings: any;

  @HostBinding('@routerTransitionUp') public routeAnimationUp = false;
  @HostBinding('@routerTransitionDown') public routeAnimationDown = false;
  @HostBinding('@routerTransitionRight') public routeAnimationRight = false;
  @HostBinding('@routerTransitionLeft') public routeAnimationLeft = false;
  @HostBinding('@routerTransitionFade') public routeAnimationFade = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              // private fuseConfig: FuseConfigService
  ) {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .subscribe((event) => {
        switch (this.fuseSettings.routerAnimation) {
          case 'fadeIn':
            this.routeAnimationFade = !this.routeAnimationFade;
            break;
          case 'slideUp':
            this.routeAnimationUp = !this.routeAnimationUp;
            break;
          case 'slideDown':
            this.routeAnimationDown = !this.routeAnimationDown;
            break;
          case 'slideRight':
            this.routeAnimationRight = !this.routeAnimationRight;
            break;
          case 'slideLeft':
            this.routeAnimationLeft = !this.routeAnimationLeft;
            break;
        }
      });

    // this.onSettingsChanged =
    //     this.fuseConfig.onSettingsChanged
    //         .subscribe(
    //             (newSettings) => {
    //                 this.fuseSettings = newSettings;
    //             }
    //         );
  }

  public ngOnInit() {

  }

  public ngOnDestroy() {
    this.onSettingsChanged.unsubscribe();
  }
}
