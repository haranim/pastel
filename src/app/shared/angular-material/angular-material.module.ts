import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatTableModule, MatRadioModule, MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatMenuModule, MatTreeModule, MatSelectModule, MatSliderModule, MatGridListModule, MatSnackBarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const modules = [
  CommonModule,
  MatButtonModule, MatInputModule, MatGridListModule,
  MatCheckboxModule, MatMenuModule,
  MatCardModule, MatTreeModule,
  MatSidenavModule, MatSelectModule,
  MatToolbarModule, MatSliderModule,
  BrowserAnimationsModule,
  MatIconModule, MatTableModule,
  MatRadioModule, MatFormFieldModule, MatSnackBarModule
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
