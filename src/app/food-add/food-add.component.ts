import { FoodserviceService } from './../foodservice.service';
import { Component } from '@angular/core';
import { Food } from '../food/food';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent {

constructor(private foodservice:FoodserviceService){}

successmessage:string='';

  food:Food={
    name:'',
    price:0,
    photos:'',
    category:''
  }

  AddFood(){
    this.foodservice.addFood(this.food);
    console.log(this.food.photos)
    this.successmessage="Food added successfully";
  }

}
