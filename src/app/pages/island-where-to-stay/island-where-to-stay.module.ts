import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IslandWhereToStayPageRoutingModule } from './island-where-to-stay-routing.module';

import { IslandWhereToStayPage } from './island-where-to-stay.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IslandWhereToStayPageRoutingModule
    ],
    exports: [
        IslandWhereToStayPage
    ],
    declarations: [IslandWhereToStayPage]
})
export class IslandWhereToStayPageModule {}
