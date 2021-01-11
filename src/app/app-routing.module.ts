import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { AdmComponent } from '../app/adm/adm.component'
import { PendingRequestsComponent } from '../app/pending-requests/pending-requests.component'
import { ViewUsersComponent } from '../app/view-users/view-users.component'
import {SignupComponent} from '../app/security/signup/signup.component'
import {SigninComponent} from '../app/security/signin/signin.component'
import {ManagerHomeComponent} from '../app/EFA-Manager/manager-home/manager-home.component'
import {CreateMatchComponent} from '../app/EFA-Manager/create-match/create-match.component'
import {ViewMatchComponent} from '../app/shared/view-match/view-match.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'managerhome',component:ManagerHomeComponent},
  {path:'managerhome/creatematch',component:CreateMatchComponent},
  {path:'viewmatches',component:ViewMatchComponent},
  {path:'adm',component:AdmComponent},
  {path:'adm/getRequests',component:PendingRequestsComponent},
  {path:'adm/getUsers',component:ViewUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
