import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IslandWhatToDoPage } from './island-what-to-do.page';

const routes: Routes = [
  {
    path: '',
    component: IslandWhatToDoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IslandWhatToDoPageRoutingModule {}
