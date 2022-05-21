import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleContentPage } from './title-content.page';

const routes: Routes = [
  {
    path: '',
    component: TitleContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleContentPageRoutingModule {}
