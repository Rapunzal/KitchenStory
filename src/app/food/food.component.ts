import { FoodserviceService } from './../foodservice.service';
import { Component, OnInit } from '@angular/core';
import { Food } from './food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foodList:Food[]=[];
 

constructor(private foodService:FoodserviceService){

}

ngOnInit(): void {
  this.foodList =this.foodService.getFood();
}

addFood(food:Food){
  this.foodList.push(food);
}

addFoodItem(food:any,category:any){
  const item:Food={
    name:food,
      photos:'../../assets/.jpg',
      price:100,
      category:category
  };
  this.foodList.push(item);
}

  
}
