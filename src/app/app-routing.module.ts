import { SuccessComponent } from './success/success.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { SearchComponent } from './search/search.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'fooditem',component:FoodComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'search/:category',component:SearchComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'success',component:SuccessComponent
  },
  {
    path:'order/:id',component:FoodOrderComponent
  },
  {
    path:'foodadd',component:FoodAddComponent
  },
  {
    path:'payment',component:PaymentComponent
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'**',redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
