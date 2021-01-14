import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './security/signup/signup.component';
import { SigninComponent } from './security/signin/signin.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdmComponent } from './adm/adm.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import {AuthService} from '../app/security/services/auth.service';
import { ManagerHomeComponent } from './EFA-Manager/manager-home/manager-home.component';
import { CreateMatchComponent } from './EFA-Manager/create-match/create-match.component';
import { ViewMatchComponent } from './shared/view-match/view-match.component';
import { EditMatchComponent } from './EFA-Manager/edit-match/edit-match.component';
import { PendingRequestsComponent } from './adm/pending-requests/pending-requests.component';
import { ViewUsersComponent } from './adm/view-users/view-users.component';
import {AuthGuard} from './guards/auth.guard'
import {AdminGuard} from './guards/admin.guard'
import {EFAGuard} from './guards/efa.guard'
import{FanGuard} from './guards/fan.guard'
import {TokenInterceptorService} from '../app/security/services/token-interceptor.service';
import { ProfileComponent } from './shared/profile/profile.component'
import { StadiumComponent } from './stadium/stadium.component';
import { CreateStadiumComponent } from './EFA-Manager/create-stadium/create-stadium.component';
import { FormsModule } from '@angular/forms';
import {NgbModalConfig, ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ReservedSeatsComponent } from './fan/reserved-seats/reserved-seats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    AdmComponent,
    ManagerHomeComponent,
    CreateMatchComponent,
    ViewMatchComponent,
    EditMatchComponent,
    PendingRequestsComponent,
    ViewUsersComponent,
    ProfileComponent,
    StadiumComponent,
    CreateStadiumComponent,
    ReservedSeatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatRadioModule,
    NgbModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminGuard,
    EFAGuard,
    FanGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
