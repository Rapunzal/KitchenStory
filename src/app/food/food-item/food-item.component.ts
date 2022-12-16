import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent {

  @Input()foods: Food[]=[];  


  selectFood(food:Food){
    console.log(food);
    const index:number=this.foods.indexOf(food);
    this.foods.splice(index,1);
  }
}
