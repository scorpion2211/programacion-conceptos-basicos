import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaseUnoPage } from './clase-uno.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseUnoPageRoutingModule {}
