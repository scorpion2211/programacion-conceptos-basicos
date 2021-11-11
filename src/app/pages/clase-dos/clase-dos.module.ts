import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseDosPageRoutingModule } from './clase-dos-routing.module';

import { ClaseDosPage } from './clase-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseDosPageRoutingModule
  ],
  declarations: [ClaseDosPage]
})
export class ClaseDosPageModule {}
