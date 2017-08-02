import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { CKEditorModule } from 'ng2-ckeditor';

import { routing } from './editors.routing';
import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';


@NgModule({
  imports: [
    SharedModule,

    CKEditorModule,

    routing,
  ],
  declarations: [
    Editors,
    Ckeditor,
  ],
})
export class EditorsModule {
}
