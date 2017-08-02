import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { routing } from './charts.routing';

import { Charts } from './charts.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { ChartistJsService } from './components/chartistJs/chartistJs.service';

@NgModule({
  imports: [
    SharedModule,

    routing,
  ],
  declarations: [
    Charts,
    ChartistJs,
  ],
  providers: [
    ChartistJsService,
  ],
})
export class ChartsModule {}
