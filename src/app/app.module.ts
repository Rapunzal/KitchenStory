import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { FoodItemComponent } from './food/food-item/food-item.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    HomeComponent,
    FoodItemComponent,
    FoodAddComponent,
    SearchComponent,
    FoodOrderComponent,
    PaymentComponent,
    AdminComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
