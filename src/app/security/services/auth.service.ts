import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _registerUrl="http://localhost:3000/user/signup"
  private _loginUrl="http://localhost:3000/user/login"
  private _getInfoUrl="http://localhost:3000/user/getInfo"
  private _editUserUrl="http://localhost:3000/user/Edit"
  

  constructor(private http:HttpClient) { }

  registerUser(user){
    console.log(user)
    return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  loggedIn(){
    if(localStorage.getItem('token'))
      return true
    else
      return false 
  }
  userType(){
    return localStorage.getItem('type')
  }
  getUser(){
    return this.http.get<any>(this._getInfoUrl);
  }
  editUser(user){
    console.log(user)
    return this.http.post<any>(this._editUserUrl,user);
  }
}
