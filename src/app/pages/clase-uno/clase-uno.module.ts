import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseUnoPageRoutingModule } from './clase-uno-routing.module';

import { ClaseUnoPage } from './clase-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseUnoPageRoutingModule
  ],
  declarations: [ClaseUnoPage]
})
export class ClaseUnoPageModule {}
