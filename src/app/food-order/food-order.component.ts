import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../food/food';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-food-order',
  templateUrl: './food-order.component.html',
  styleUrls: ['./food-order.component.css']
})
export class FoodOrderComponent implements OnInit{
  food!: Food[];
  id!:number;

  constructor(private foodservice:FoodserviceService,private router:ActivatedRoute){
   
  }

  ngOnInit(): void {
    this.food=this.foodservice.getFood();

   this.router.params.subscribe((params)=> {this.id=params['id']})
   
  }

}
