import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothtechPageRoutingModule } from './clothtech-routing.module';

import { ClothtechPage } from './clothtech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothtechPageRoutingModule
  ],
  declarations: [ClothtechPage]
})
export class ClothtechPageModule {}
