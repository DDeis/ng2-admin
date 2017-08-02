import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaModule } from 'app/theme/nga.module';

import { NavbarComponent } from './navbar.component';

import { BaMsgCenter } from './baMsgCenter/baMsgCenter.component'

@NgModule({
  imports: [
    CommonModule,

    NgaModule,
  ],
  declarations: [
    NavbarComponent,
    BaMsgCenter,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule { }
