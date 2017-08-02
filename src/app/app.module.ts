import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from 'app/core/core.module';
import { AppState } from 'app/core/app.service';
/*
 * Platform and Environment providers/directives/pipes
 */
import { AppRoutingModule } from './app-routing.module';

// App is our top level component
import { App } from './app.component';
import { PagesModule } from './pages/pages.module';


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
  ],
  imports: [ // import Angular's modules
    BrowserModule,

    CoreModule,

    PagesModule,
    AppRoutingModule,
  ],
})
export class AppModule {

  constructor(public appState: AppState) { }

}
