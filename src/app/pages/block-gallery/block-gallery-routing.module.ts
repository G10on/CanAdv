import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockGalleryPage } from './block-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: BlockGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockGalleryPageRoutingModule {}
