import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IslandHowToGetTherePage } from './island-how-to-get-there.page';

const routes: Routes = [
  {
    path: '',
    component: IslandHowToGetTherePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IslandHowToGetTherePageRoutingModule {}
