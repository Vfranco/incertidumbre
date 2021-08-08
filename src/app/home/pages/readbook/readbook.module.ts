import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadbookPageRoutingModule } from './readbook-routing.module';

import { ReadbookPage } from './readbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadbookPageRoutingModule
  ],
  declarations: [ReadbookPage]
})
export class ReadbookPageModule {}
