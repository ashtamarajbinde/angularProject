import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UnlockAccountService } from '../service/unlock-account.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {
constructor(private scientist:UnlockAccountService){}

UnlockForm=new FormGroup({
  confirmPwd: new FormControl(''),
  email:new FormControl('',[Validators.required,Validators.email]),
  newPwd: new FormControl(''),
  tempPwd: new FormControl('')
})
SubmitBtn(){
  this.scientist.fun(this.UnlockForm.value).subscribe(Response=>console.log(Response))
}
}


