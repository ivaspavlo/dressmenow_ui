
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { ShopRoutingModule } from '@app/shop/shop-routing.module';

import { ShopPageComponent } from './pages/shop-page/shop-page.component';

@NgModule({
  declarations: [
    ShopPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }