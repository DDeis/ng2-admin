import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';

import { routing } from './pages.routing';

import { Pages } from './pages.component';

@NgModule({
  imports: [
    SharedModule,
    routing,
  ],
  declarations: [Pages],
})
export class PagesModule {
}
