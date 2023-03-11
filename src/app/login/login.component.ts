import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private vishal: LoginService){
  this.ashu()
}
data:any

ash=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  pwd:new FormControl('')
})
ashu(){
  this.vishal.postfun(this.ash.value).subscribe(Response=>console.log(Response))
}
}
