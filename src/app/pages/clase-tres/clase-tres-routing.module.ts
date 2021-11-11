import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaseTresPage } from './clase-tres.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseTresPageRoutingModule {}
