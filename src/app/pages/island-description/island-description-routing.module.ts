import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IslandDescriptionPage } from './island-description.page';

const routes: Routes = [
  {
    path: '',
    component: IslandDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IslandDescriptionPageRoutingModule {}
