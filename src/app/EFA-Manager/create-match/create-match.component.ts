import { Component, OnInit } from '@angular/core';
import {details} from '../teams'
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { differentTeams,differentMen,differentlinsemen } from './validators'
import {MatchService} from '../../shared/view-match/services/matches/match.service'

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {
  

  teamsName=details.teams;
  // logos=details.logos;
  referees=details.referees
  matchData={};
  constructor(private fb: FormBuilder,private _mauth:MatchService) { }

    // you should be taking it from the backend
  venues=[
    "ddd",
    "gg",
    "gd",
    "rdd",
    "dod",
  ];

  ngOnInit(): void {
  }


 msgErr="This field is required.";
 createMatchForm=new FormGroup({
   homeTeam:new FormControl('',[
     Validators.required,
   ]),
   awayTeam:new FormControl('',[
     Validators.required,
   ]),
   matchVenue:new FormControl('',[
     Validators.required,
   ]),
   mainReferee:new FormControl('',[
     Validators.required,
   ]),
   date:new FormControl('',[
     Validators.required,
   ]),
  //  time:new FormControl('',[
  //    Validators.required,
  //  ]),
   linseman1:new FormControl('',[
     Validators.required,
   ]),
   linseman2:new FormControl('',[
     Validators.required,
   ])
  
 },{validators:[differentTeams,differentMen,differentlinsemen]});

 get homeTeam(){return this.createMatchForm.get('homeTeam')}
 get awayTeam(){return this.createMatchForm.get('awayTeam')}
 get matchVenue(){return this.createMatchForm.get('matchVenue')}
 get mainReferee(){return this.createMatchForm.get('mainReferee')}
 get date(){return this.createMatchForm.get('date')}
 get time(){return this.createMatchForm.get('time')}
 get linseman1(){return this.createMatchForm.get('linseman1')}
 get linseman2(){return this.createMatchForm.get('linseman2')}

 createMatch(){
   console.log(this.createMatchForm.controls)
   this.matchData={

    "HomeTeam":this.homeTeam?.value,
    "AwayTeam":this.awayTeam?.value,
    "StadiumName":this.matchVenue?.value,
    "MatchDate": this.date?.value,
    // "MatchTime":this.time?.value,
    "MainReferee":this.mainReferee?.value,
    "LinesMan1":this.linseman1?.value,
    "LinesMan2":this.linseman2?.value
    
    }
    // console.log("DATAAAAAA")
    // console.log(this.date.value)
    this._mauth.createMatch(this.matchData).subscribe(
      res=>{
        console.log(res.message)
        if(res.message=="OK"){
          alert("The match has been create successfully");
        }
      },
      err=>console.log(err)
    )
   // We have already made sure that data is valid , now we can send it to
   // the backend.
  //  this.registerUserData={
  //    'userName':this.userName?.value,
  //    'firstName':this.firstName?.value,
  //    'lastName':this.lastName?.value,
  //    'email':this.email?.value,
  //    'password':this.password?.value,
  //    'city':this.city?.value,
  //    'birthDate':this.birthDate?.value,
  //    'role':this.role?.value,
  //    'gender':this.gender?.value,
  //    'address':this.address?.value

  //  }
  //   this._auth.registerUser(this.registerUserData).subscribe(
  //     res=>console.log(res),
  //     err=>console.log(err)
  //   )

   
 }
 

}
