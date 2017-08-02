import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
  imports: [
    CommonModule,

    NavbarModule,
    SidebarModule,
    HeaderModule,
  ],
  declarations: [],
  exports: [
    NavbarModule,
    SidebarModule,
    HeaderModule,
    FooterModule,
  ],
})
export class LayoutModule { }
