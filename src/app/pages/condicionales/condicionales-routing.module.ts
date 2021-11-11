import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondicionalesPage } from './condicionales.page';

const routes: Routes = [
  {
    path: '',
    component: CondicionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondicionalesPageRoutingModule {}
