import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitleContentPageRoutingModule } from './title-content-routing.module';

import { TitleContentPage } from './title-content.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TitleContentPageRoutingModule
    ],
    exports: [
        TitleContentPage
    ],
    declarations: [TitleContentPage]
})
export class TitleContentPageModule {}
