import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
})
export class AngularMaterialModule { }
