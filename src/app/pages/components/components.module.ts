import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { TreeModule } from 'ng2-tree';

import { routing }  from './components.routing';

import { Components } from './components.component';
import { TreeView } from './components/treeView/treeView.component';

@NgModule({
  imports: [
    SharedModule,

    TreeModule,

    routing,
  ],
  declarations: [
    Components,
    TreeView,
  ],
})
export class ComponentsModule {}
