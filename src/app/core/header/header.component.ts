import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../security/services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService,private router:Router) { }
  isLoggedIn:Boolean=false;
  ngOnInit(): void {
    this.isLoggedIn=this._auth.loggedIn();
  }
  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('type')
    this.router.navigate(['/'])
    this.isLoggedIn=this._auth.loggedIn();
  }
 
}
