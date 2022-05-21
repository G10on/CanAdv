import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {TitleContentPageModule} from "../../pages/title-content/title-content.module";
import {IntroTitlePageModule} from "../../pages/intro-title/intro-title.module";
import {BlockGalleryPageModule} from "../../pages/block-gallery/block-gallery.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TitleContentPageModule,
    IntroTitlePageModule,
    BlockGalleryPageModule
  ],
  exports: [
    HomePage
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
