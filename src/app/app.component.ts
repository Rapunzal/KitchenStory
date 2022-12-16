import { FoodserviceService } from './foodservice.service';
import { Component, OnInit } from '@angular/core';
import { Food } from './food/food';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KitchenProject';

constructor(private foodservice:FoodserviceService){

}
foodList!:Food[];
  food: Food={
    id:0,
    name:'',
    price:0,
    photos:'',
    category:''

  };
  ngOnInit(): void {
    this.foodList=this.foodservice.getFood();
  }

  searchFood(){
    console.log(this.food.category)
  }
}


