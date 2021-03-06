import { Component, OnInit } from '@angular/core';
import {details} from '../teams'
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { differentTeams,differentMen,differentlinsemen } from './validators'
import {MatchService} from '../../shared/view-match/services/matches/match.service'
import {Router} from '@angular/router'
import * as moment from 'moment'
@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {
  

  // today = new Date().toISOString();
  minDate = moment(new Date()).format('yyyy-MM-ddTHH:mm')
  teamsName=details.teams;
  // logos=details.logos;
  referees=details.referees
  matchData={};
  start = Date.now();
  constructor(private fb: FormBuilder,private _mauth:MatchService,private router:Router) { }

    // you should be taking it from the backend
  venues=[];

  ngOnInit(): void {
    console.log("Min Dateeeeeee")
    console.log(this.minDate)
    this._mauth.getStadiums().subscribe(
      res=>{
        this.venues=res.stadiums

      }
    )
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
   this.matchData={

    "HomeTeam":this.homeTeam.value,
    "AwayTeam":this.awayTeam.value,
    "StadiumName":this.matchVenue.value,
    "MatchDate": this.date.value,
    // "MatchTime":this.time?.value,
    "MainReferee":this.mainReferee.value,
    "LinesMan1":this.linseman1.value,
    "LinesMan2":this.linseman2.value
    
    }
    this._mauth.createMatch(this.matchData).subscribe(
      res=>{
        if(res.message=="OK"){
          alert("The match has been create successfully");
          this.router.navigate(['/viewmatches'])
        }
      },
      err=>{
        if(err.error.msg=="Stadium already reserved"){
          alert('This Staduim is reserved for another match at the same time')
        }
      }
    )

   
 }
 

}
