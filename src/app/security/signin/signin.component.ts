import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  userData={}
  constructor(private fb: FormBuilder,private _auth:AuthService) { }

  ngOnInit(): void {
  }
  msgErr="This field is required.";
  signInForm=new FormGroup({
    userName:new FormControl('',[
      Validators.required,
    ]),
    password:new FormControl('',[
      Validators.required,
    ]),
  })
  get userName(){return this.signInForm.get('userName')}
  get password(){return this.signInForm.get('password')}

  onFormSubmit(){
    console.log("Valid Sign In data")
    this.userData={
      'userName':this.userName.value,
      'password':this.password.value
    }
    this._auth.loginUser(this.userData).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )

  }

}



