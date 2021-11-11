import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondicionalesPageRoutingModule } from './condicionales-routing.module';

import { CondicionalesPage } from './condicionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CondicionalesPageRoutingModule
  ],
  declarations: [CondicionalesPage]
})
export class CondicionalesPageModule {}
