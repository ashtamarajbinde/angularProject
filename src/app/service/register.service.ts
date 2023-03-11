import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  baseurl='http://15.206.171.20:9090'
  constructor(private http:HttpClient) { }

  postlogin(body:any){
    return this.http.post(`${this.baseurl}/login`,body,{responseType:'text'})
  }
 registerUser(body:any){
    return this.http.post(`${this.baseurl}/saveUser`,body,{responseType:'text'})
  }

  countryId(){
return this.http.get(`${this.baseurl}/countries`)
  }

  stateId(countryId:number){
return this.http.get(`${this.baseurl}/states/${countryId}`)
  }

  cityId(stateId:number){
return this.http.get(`${this.baseurl}/cities/${stateId}`)
  }

  email(email:any){
    return this.http.get(`${this.baseurl}/emailcheck/${email}`,{responseType:'text'})
      }

}

