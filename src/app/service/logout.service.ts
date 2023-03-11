import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private mac:HttpClient) { }
  baseUrl='http://15.206.171.20:9090';

  forgot(emailId:any){
    return this.mac.get(`${this.baseUrl}/forgotPwd/${emailId}`,{responseType:'text'})
  }
 
}
