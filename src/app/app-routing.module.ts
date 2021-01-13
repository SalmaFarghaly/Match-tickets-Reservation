import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { AdmComponent } from '../app/adm/adm.component'
// import { PendingRequestsComponent } from '../app/pending-requests/pending-requests.component'
// import { ViewUsersComponent } from '../app/view-users/view-users.component'
import {PendingRequestsComponent} from '../app/adm/pending-requests/pending-requests.component'
import {ViewUsersComponent} from '../app/adm/view-users/view-users.component'
import {SignupComponent} from '../app/security/signup/signup.component'
import {SigninComponent} from '../app/security/signin/signin.component'
import {ManagerHomeComponent} from '../app/EFA-Manager/manager-home/manager-home.component'
import {CreateMatchComponent} from '../app/EFA-Manager/create-match/create-match.component'
import {ViewMatchComponent} from '../app/shared/view-match/view-match.component'
import {EditMatchComponent} from '../app/EFA-Manager/edit-match/edit-match.component'
import {AuthGuard} from '../app/guards/auth.guard'
import{AdminGuard} from '../app/guards/admin.guard'
import {EFAGuard} from '../app/guards/efa.guard'
import {FanGuard} from '../app/guards/fan.guard'
import {ProfileComponent} from '../app/shared/profile/profile.component'
// import { AuthService } from './security/services/auth.service';
import {StadiumComponent} from '../app/stadium/stadium.component'
import {CreateStadiumComponent} from '../app/EFA-Manager/create-stadium/create-stadium.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'managerhome',component:ManagerHomeComponent,
  canActivate:[AuthGuard,EFAGuard]},
  {path:'managerhome/creatematch',component:CreateMatchComponent,
  canActivate:[AuthGuard,EFAGuard]},
  {path:'viewmatches',component:ViewMatchComponent},
  {path:'managerhome/editmatch',component:EditMatchComponent,
  canActivate:[AuthGuard,EFAGuard]},
  {path:'adm',component:AdmComponent,
  canActivate:[AuthGuard,AdminGuard]},
  {path:'adm/getRequests',component:PendingRequestsComponent,
  canActivate:[AuthGuard,AdminGuard]},
  {path:'adm/getUsers',component:ViewUsersComponent,
  canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent},
  {path:'managerhome/createStadium',component:CreateStadiumComponent,
  canActivate:[AuthGuard,EFAGuard]},
  {path:'createStadium/stadium',component:StadiumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
