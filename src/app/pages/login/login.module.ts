import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { routing } from './login.routing';
import { Login } from './login.component';

@NgModule({
  imports: [
    SharedModule,
    routing,
  ],
  declarations: [
    Login,
  ],
})
export class LoginModule {}
