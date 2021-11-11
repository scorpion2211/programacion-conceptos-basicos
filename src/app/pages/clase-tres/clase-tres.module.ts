import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseTresPageRoutingModule } from './clase-tres-routing.module';

import { ClaseTresPage } from './clase-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseTresPageRoutingModule
  ],
  declarations: [ClaseTresPage]
})
export class ClaseTresPageModule {}
