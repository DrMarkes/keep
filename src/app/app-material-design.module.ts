import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: []
})
export class AppMaterialDesignModule { }
