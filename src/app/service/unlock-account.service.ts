import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnlockAccountService {

  constructor(private science:HttpClient) { }
url='http://15.206.171.20:9090'

 fun(body:any){
return this.science.post(`${this.url}/unlock`,body,{responseType:'text'})
 }

}
