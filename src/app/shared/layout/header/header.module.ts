import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppTranslationModule } from 'app/shared/app-translation.module';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,

    AppTranslationModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule { }
