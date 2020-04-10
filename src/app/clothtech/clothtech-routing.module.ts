import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothtechPage } from './clothtech.page';

const routes: Routes = [
  {
    path: '',
    component: ClothtechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothtechPageRoutingModule {}
