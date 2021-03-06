import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavsPageRoutingModule } from './favs-routing.module';

import { FavsPage } from './favs.page';
import {IntroTitlePageModule} from "../../pages/intro-title/intro-title.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FavsPageRoutingModule,
        IntroTitlePageModule
    ],
  declarations: [FavsPage]
})
export class FavsPageModule {}
