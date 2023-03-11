import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent   {
 
 constructor(private regi:RegisterService){
  this.regiUser
 }
 ngOnInit():void{
this.countryid()
 }

  Register=new FormGroup({
    cityId:new FormControl(''),
      countryId:new FormControl(''),
      dob:new FormControl(''),
    fname:new FormControl('',[Validators.required]),
      gender:new FormControl(''),
      lname:new FormControl('',[Validators.required]),
      phno:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      stateId:new FormControl(''),
      email:new FormControl('',[Validators.required,Validators.email])
    })
    regiUser(){
      this.regi.registerUser(this.Register.value).subscribe((Response:any)=>console.log(Response))
    }
    countries:any
    
    countryid(){
      this.regi.countryId().subscribe(Response=>this.countries=Response )
    }
    state:any
    
    stateid(countryId:number){
      this.regi.stateId(countryId).subscribe(Response=>this.state=Response)
    }
 
    city:any
    cityId(stateId:number){
      this.regi.cityId(stateId).subscribe(Response=>this.city=Response)
    }
    
    emailCheck(email:any){
      this.regi.email(email).subscribe(Response=>console.log(Response))
    }
    }







