import { Component, OnInit} from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  userData={}
  constructor(private fb: FormBuilder,private _auth:AuthService,private router:Router) { }

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
    
    this.userData={
      'name':this.userName.value.toLowerCase(),
      'password':this.password.value
    }
    this._auth.loginUser(this.userData).subscribe(
      res=>{

        localStorage.setItem('token',res.token);
        localStorage.setItem('type',res.type);
        if(res.type=="manager"){
          this.router.navigate(['/managerhome'])
          
        }
        else if(res.type=="administrator"){
          this.router.navigate(['/adm'])
        }
        else if(res.type="fan"){
          this.router.navigate(['/viewmatches'])
        }
      },
      err=>{
        console.log(err)
        if(err){
          alert(err.error.message);
        }
      }
    )

  }

}



