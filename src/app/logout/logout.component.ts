import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
constructor(private sam:LogoutService){}

LogoutForm=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email])
})
 email:any;
out(){
  this.sam.forgot(this.email).subscribe(response=>console.log(response))
}
}
