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
  appear:Boolean=false;
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
  
    )
    
  console.log(this.editForm.value)

}


 cities=cities.citiesNames;
 registerUserData={}

 msgErr="This field is required.";

 onFormSubmit(){

  this.appear=true;  
 }

 editUser(){
  let user={
    "firstName":this.firstName.value,
    "lastName":this.lastName.value,
    "password":this.password.value,
    "birthDate":this.birthDate.value,
    "city":this.city.value,
    "address":this.address.value
  };
  let password=this.password.value

  let data={
    "user":user,
    "password":password
  }
  this._auth.editUser(data).subscribe(
    res=>{
      if(res.message== 'update success'){
        alert("Your Info has been Updated successfully!")
        this.appear=false
      }
    },
    err=>{
      // if(err.error.message=="Auth failed Incorrect Password !!"){
        alert("Auth failed Incorrect Password !!")
        this.appear=false
      // }
    }

  )
 }
 

 get firstName(){return this.editForm.get('firstName')}
 get lastName(){return this.editForm.get('lastName')}
 get password(){return this.editForm.get('password')}
 get birthDate(){return this.editForm.get('birthDate')}
 get city(){return this.editForm.get('city')}
 get address(){return this.editForm.get('address')}
 

}
