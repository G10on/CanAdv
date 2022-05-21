import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IslandDescriptionPageRoutingModule } from './island-description-routing.module';

import { IslandDescriptionPage } from './island-description.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IslandDescriptionPageRoutingModule
    ],
    exports: [
        IslandDescriptionPage
    ],
    declarations: [IslandDescriptionPage]
})
export class IslandDescriptionPageModule {}
