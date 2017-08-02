import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { routing } from './maps.routing';

import { Maps } from './maps.component';
import { BubbleMaps } from './components/bubbleMaps/bubbleMaps.component';
import { GoogleMaps } from './components/googleMaps/googleMaps.component';
import { LeafletMaps } from './components/leafletMaps/leafletMaps.component';
import { LineMaps } from './components/lineMaps/lineMaps.component';
import { BubbleMapsService } from './components/bubbleMaps/bubbleMaps.service';
import { LineMapsService } from './components/lineMaps/lineMaps.service';


@NgModule({
  imports: [
    SharedModule,

    routing,
  ],
  declarations: [
    Maps,
    BubbleMaps,
    GoogleMaps,
    LeafletMaps,
    LineMaps,
  ],
  providers: [
    BubbleMapsService,
    LineMapsService,
  ],
})
export class MapsModule {}
