import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroTitlePageRoutingModule } from './intro-title-routing.module';

import { IntroTitlePage } from './intro-title.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IntroTitlePageRoutingModule
    ],
    exports: [
        IntroTitlePage
    ],
    declarations: [IntroTitlePage]
})
export class IntroTitlePageModule {}
