import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppTranslationModule } from 'app/shared/app-translation.module';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,

    AppTranslationModule,
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule { }
