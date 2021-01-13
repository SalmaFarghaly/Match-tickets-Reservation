import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../security/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class FanGuard implements CanActivate {

  constructor(private _auth:AuthService,private _router:Router){

  }
  canActivate():boolean{
    if(this._auth.userType()=="fan"){
      return true
    }
    else{
      this._router.navigate(['/'])
      return false;
    }

  }
}
