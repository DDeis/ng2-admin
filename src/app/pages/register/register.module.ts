import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { routing } from './register.routing';

import { Register } from './register.component';

@NgModule({
  imports: [
    SharedModule,

    routing,
  ],
  declarations: [
    Register,
  ],
})
export class RegisterModule { }
