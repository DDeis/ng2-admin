import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgaModule } from 'app/theme/nga.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppTranslationModule } from './app-translation.module';

@NgModule({
  imports: [
    NgaModule.forRoot(),
    NgbModule.forRoot(),
  ],
  declarations: [],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    NgaModule,
    NgbModule,

    AppTranslationModule,
  ],
})
export class SharedModule { }
