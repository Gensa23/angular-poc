import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdGridListModule, MdCardModule, MdIconModule, MdInputModule, MdMenuModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdMenuModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdGridListModule,
  ],
  declarations: []
})
export class MaterialModule { }
