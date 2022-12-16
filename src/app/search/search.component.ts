import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Food } from '../food/food';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  category:string='';

  /*
  category$ = this.router.params.pipe(
    map(params => params['category'])
  )*/



  constructor(private foodservice:FoodserviceService,private router:ActivatedRoute){
   
  }
 
    food!: Food[];
    ngOnInit(): void {
      this.food=this.foodservice.getFood();

     this.router.params.subscribe((params)=> {this.category=params['category']})
     
    }
  
    searchItem(category:string){
      console.log(category)
    }
}
