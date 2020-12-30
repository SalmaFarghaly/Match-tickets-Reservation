import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { passwordValidator,checkPasswords } from './valiadtors'



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) {

   }

  msgErr="This field is required.";
  signUpForm=new FormGroup({
    userName:new FormControl('',[
      Validators.required,
    ]),
    firstName:new FormControl('',[
      Validators.required,
    ]),
    lastName:new FormControl('',[
      Validators.required,
    ]),
    birthDate:new FormControl('',[
      Validators.required,
    ]),
    gender:new FormControl('',[
      Validators.required,
    ]),
    city:new FormControl('',[
      Validators.required,
    ]),
    email:new FormControl('',[
      Validators.required,
    ]),
    address:new FormControl(''),
    cnfPassword:new FormControl('',[
      Validators.required,
      checkPasswords
    ]),
    password:new FormControl('',[
      Validators.required,
      passwordValidator
    ])

  });
 
  ngOnInit(): void {
  }
  onFormSubmit(){
    
  }
  
  get userName(){return this.signUpForm.get('userName')}
  get firstName(){return this.signUpForm.get('firstName')}
  get lastName(){return this.signUpForm.get('lastName')}
  get password(){return this.signUpForm.get('password')}
  get cnfPassword(){return this.signUpForm.get('cnfPassword')}
  get email(){return this.signUpForm.get('email')}
  get birthDate(){return this.signUpForm.get('birthDate')}
  

}
