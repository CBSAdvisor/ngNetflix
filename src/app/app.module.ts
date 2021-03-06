import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { TranslateModule } from '@ngx-translate/core';
import { PagesModule } from './main/content/pages/pages.module';
import { SandboxAppModule } from "./main/content/apps/sandbox-app/sandbox-app.module";

const appRoutes: Routes = [
  { path: '', redirectTo: 'apps/gemsofwar/kingdoms', pathMatch: 'full' },
  {
    path: 'apps/gemsofwar',
    loadChildren: './main/content/apps/gems-of-war/gems-of-war.module#GemsOfWarModule'
  },
  {
    path        : 'sandbox',
    loadChildren: './main/content/apps/sandbox-app/sandbox-app.module#SandboxAppModule'
  },
  { path: '**', redirectTo: 'pages/errors/error-404' }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        TranslateModule.forRoot(),
        FuseMainModule,
        FuseSampleModule,
      PagesModule
    ],
    providers   : [
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
