import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

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

  }

}



