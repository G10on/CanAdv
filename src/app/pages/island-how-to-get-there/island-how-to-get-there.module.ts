import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IslandHowToGetTherePageRoutingModule } from './island-how-to-get-there-routing.module';

import { IslandHowToGetTherePage } from './island-how-to-get-there.page';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IslandHowToGetTherePageRoutingModule,
        FontAwesomeModule
    ],
    exports: [
        IslandHowToGetTherePage
    ],
    declarations: [IslandHowToGetTherePage]
})
export class IslandHowToGetTherePageModule {}
