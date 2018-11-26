import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatTableModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const modules = [
  CommonModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  BrowserAnimationsModule,
  MatIconModule, MatTableModule
];

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ],
})
export class AngularMaterialModule { }
