import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IslandWhatToDoPageRoutingModule } from './island-what-to-do-routing.module';

import { IslandWhatToDoPage } from './island-what-to-do.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IslandWhatToDoPageRoutingModule
    ],
    exports: [
        IslandWhatToDoPage
    ],
    declarations: [IslandWhatToDoPage]
})
export class IslandWhatToDoPageModule {}
