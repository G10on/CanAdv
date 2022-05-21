import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockGalleryPageRoutingModule } from './block-gallery-routing.module';

import { BlockGalleryPage } from './block-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockGalleryPageRoutingModule
  ],
  exports: [
    BlockGalleryPage
  ],
  declarations: [BlockGalleryPage]
})
export class BlockGalleryPageModule {}
