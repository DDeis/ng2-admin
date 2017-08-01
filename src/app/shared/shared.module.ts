import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

import { NgaModule } from 'app/theme/nga.module';

@NgModule({
  imports: [
    NgaModule.forRoot(),
    NgbModule.forRoot(),
  ],
  declarations: [],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    NgbModule,
  ],
})
export class SharedModule { }
