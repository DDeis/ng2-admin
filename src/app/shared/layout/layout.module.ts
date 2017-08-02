import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,

    NavbarModule,
  ],
  declarations: [],
  exports: [NavbarModule],
})
export class LayoutModule { }
