import { Injectable } from '@angular/core';
import { Food } from './food/food';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  foodList:Food[]=[
    {
      id:1,
      name:'Idly',
      photos:'../../assets/idly.jpg',
      price:100,
      category:'veg'
    },
    {
      id:2,
      name:'Dosa',
      photos:'../../assets/dosa.jpg',
      price:100,
      category:'veg'
    },
    {
      id:3,
      name:'Veg Briyani',
      photos:'../../assets/vegBriyani.jpeg',
      price:200,
      category:'veg'
    },
    {
      id:4,
      name:'Chicken Briyani',
      photos:'../../assets/chickenBriyani.jpg',
      price:300,
      category:'Non-veg'
    },
    {
      id:5,
      name:'Chicken Chilly',
      photos:'../../assets/chickenChilly.jpg',
      price:250,
      category:'Non-veg'
    }
  ];
  constructor() { }

addFood(food:Food){
  this.foodList.push(food);
}

  getFood(){
    return this.foodList;
  }
}
