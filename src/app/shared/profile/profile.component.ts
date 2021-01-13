import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../app/security/services/auth.service'
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { passwordValidator,checkPasswords } from '../../security/signup/valiadtors'
import {cities} from '../../security/cities'


// Interface userInfo{

// }
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData;
  // editForm;
  constructor(private _auth:AuthService) { }

  editForm=new FormGroup({

    firstName:new FormControl('',[
      Validators.required,
    ]),
    lastName:new FormControl('',[
      Validators.required,
    ]),
    birthDate:new FormControl('',[
      Validators.required,
    ]),
    city:new FormControl('',[
      Validators.required,
    ]),
    address:new FormControl(''),
    password:new FormControl('',[
      Validators.required,
      passwordValidator
    ])
 
  });

  ngOnInit(): void {
    this._auth.getUser().subscribe(
      res=>{
        this.userData={
          "firstName":res.firstName,
          "lastName":res.lastName,
          "city":res.city,
          "address":res.address,
          "birthDate":res.birthDate,
        }
        this.editForm.patchValue({
          firstName:res.firstName,
          lastName:res.lastName,
          city:res.city,
          address:res.address,
          birthDate:res.birthDate
        });
        console.log(this.userData);

      },
      err=>console.log(err)
    )
    
  console.log(this.editForm.value)

}


 cities=cities.citiesNames;
 registerUserData={}

 msgErr="This field is required.";

 onFormSubmit(){
  //  console.log(this.signUpForm.controls)
  //  // We have already made sure that data is valid , now we can send it to
  //  // the backend.
  //  this.registerUserData={

  //    'firstName':this.firstName.value,
  //    'lastName':this.lastName.value,

  //    'password':this.password.value,
  //    'birthDate':this.birthDate.value,
  //    'gender':this.gender.value,
  //    'city':this.city.value,
  //    'address':this.address.value,


  //  }
  //   this._auth.registerUser(this.registerUserData).subscribe(
  //     res=>{
  //       if(res.message=="User created"){
  //       console.log(res)
  //       alert("You have signed up successfully")
  //       }
  //      },
  //     err=>{
  //      if(err.error.message=="Username already exists"){
  //        alert("This Username already exists , Please choose another one");
  //      }
  //    }
  //   )

   
 }
 

 get firstName(){return this.editForm.get('firstName')}
 get lastName(){return this.editForm.get('lastName')}
 get password(){return this.editForm.get('password')}
 get birthDate(){return this.editForm.get('birthDate')}
 get city(){return this.editForm.get('city')}
 get address(){return this.editForm.get('address')}
 

}
