import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    SharedModule,
    
    PagesRoutingModule,
  ],
  declarations: [PagesComponent],
})
export class PagesModule {
}
