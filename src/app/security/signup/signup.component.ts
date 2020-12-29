import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  signUpForm=new FormGroup({
    userName:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    birthDate:new FormControl(''),
    gender:new FormControl(''),
    city:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
    cnfPassword:new FormControl(''),
    password:new FormControl('')

  });
  ngOnInit(): void {
  }
  onFormSubmit(){
    
  }

}
