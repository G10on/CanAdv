import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroTitlePage } from './intro-title.page';

const routes: Routes = [
  {
    path: '',
    component: IntroTitlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroTitlePageRoutingModule {}
