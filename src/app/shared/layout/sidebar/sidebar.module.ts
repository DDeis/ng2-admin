import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppTranslationModule } from 'app/shared/app-translation.module';
import { NgaModule } from 'app/theme/nga.module';

import { SidebarComponent } from './sidebar.component';
import { BaMenu, BaMenuItem } from './baMenu';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    AppTranslationModule,
    NgaModule,
  ],
  declarations: [
    SidebarComponent,
    BaMenu,
    BaMenuItem,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule { }
