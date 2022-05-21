import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IslandPageRoutingModule } from './island-routing.module';

import { IslandPage } from './island.page';
import {IntroTitlePageModule} from "../../pages/intro-title/intro-title.module";
import {IslandDescriptionPageModule} from "../../pages/island-description/island-description.module";
import {IslandWhatToDoPageModule} from "../../pages/island-what-to-do/island-what-to-do.module";
import {IslandWhereToStayPageModule} from "../../pages/island-where-to-stay/island-where-to-stay.module";
import {IslandHowToGetTherePageModule} from "../../pages/island-how-to-get-there/island-how-to-get-there.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IslandPageRoutingModule,
    IntroTitlePageModule,
    IslandDescriptionPageModule,
    IslandWhatToDoPageModule,
    IslandWhereToStayPageModule,
    IslandHowToGetTherePageModule
  ],
  declarations: [IslandPage]
})
export class IslandPageModule {}
