import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IslandWhereToStayPage } from './island-where-to-stay.page';

const routes: Routes = [
  {
    path: '',
    component: IslandWhereToStayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IslandWhereToStayPageRoutingModule {}
