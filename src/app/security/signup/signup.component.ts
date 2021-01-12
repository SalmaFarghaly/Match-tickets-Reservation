import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { passwordValidator,checkPasswords } from './valiadtors'
import {AuthService} from '../services/auth.service'




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder,private _auth:AuthService) {

   }


  cities: any = ['Alex', 'Cairo', 'Assuit','Luxor','Asswan']
  registerUserData={}

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
    ]),
    role:new FormControl('',[
      Validators.required
    ])

  });
 
  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log(this.signUpForm.controls)
    // We have already made sure that data is valid , now we can send it to
    // the backend.
    this.registerUserData={
      'name':this.userName?.value,
      'firstName':this.firstName?.value,
      'lastName':this.lastName?.value,
      'email':this.email?.value,
      'password':this.password?.value.toLowerCase(),
      'city':this.city?.value,
      'birthDate':this.birthDate?.value,
      'role':this.role?.value,
      'gender':this.gender?.value,
      'address':this.address?.value

    }
     this._auth.registerUser(this.registerUserData).subscribe(
       res=>console.log(res),
       err=>console.log(err)
     )

    
  }
  
  get userName(){return this.signUpForm.get('userName')}
  get firstName(){return this.signUpForm.get('firstName')}
  get lastName(){return this.signUpForm.get('lastName')}
  get password(){return this.signUpForm.get('password')}
  get cnfPassword(){return this.signUpForm.get('cnfPassword')}
  get email(){return this.signUpForm.get('email')}
  get birthDate(){return this.signUpForm.get('birthDate')}
  get city(){return this.signUpForm.get('city')}
  get address(){return this.signUpForm.get('address')}
  get role(){return this.signUpForm.get('role')}
  get gender(){return this.signUpForm.get('gender')}
  

}
