import { Component } from '@angular/core';
import { Admin } from './admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  admin:Admin={
    username:"",
    password:""
  }
 
  message:string="";

  myadmin(){
    if(this.admin.username=="admin" && this.admin.password=="1234"){
      console.log();
      this.message="login successfull";
   }else{
    this.message="incorrect username or password";
   }
  }

}
