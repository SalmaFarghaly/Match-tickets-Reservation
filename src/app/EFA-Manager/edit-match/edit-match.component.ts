import { Component, OnInit } from '@angular/core';
import {details} from '../../EFA-Manager/teams'
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { differentTeams,differentMen,differentlinsemen } from '../../EFA-Manager/create-match/validators'
import {MatchService} from '../../shared/view-match/services/matches/match.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.scss']
})
export class EditMatchComponent implements OnInit {

  constructor(private _match:MatchService,private router:Router) { }

  chosenMatch;
  teamsName=details.teams;
  referees=details.referees;
  venues=[];

  MatchDate:Date;
  matchID;
  // MatchTime="18:43";
  // today: number = Date.now();
  // today="18:43"
  
  ngOnInit(): void {
    this.MatchDate = new Date(localStorage.getItem('Date'));
    this.chosenMatch={
     "HomeTeam":localStorage.getItem('HomeTeam'),
     "AwayTeam":localStorage.getItem('AwayTeam'),
     "StadiumName":localStorage.getItem('Venue'),
     "LinesMan1":localStorage.getItem('Linesman1'),
     "LinesMan2":localStorage.getItem('LinesMan2'),
     "MainReferee":localStorage.getItem('MainReferee')
    }
    this.matchID=localStorage.getItem('id');
    this._match.getStadiums().subscribe(
      res=>{
        this.venues=res.stadiums

      }
    )

  }

  editMatchForm=new FormGroup({
    homeTeam:new FormControl(localStorage.getItem('HomeTeam'),[
      // Validators.required,
    ]),
    awayTeam:new FormControl(localStorage.getItem('AwayTeam'),[
      // Validators.required,
    ]),
    matchVenue:new FormControl(localStorage.getItem('Venue'),[
      // Validators.required,
    ]),
    mainReferee:new FormControl(localStorage.getItem('MainReferee'),[
      // Validators.required,
    ]),
    date:new FormControl(null,[
      // Validators.required,
    ]),
    linseman1:new FormControl(localStorage.getItem('Linesman1'),[
      // Validators.required,
    ]),
    linseman2:new FormControl(localStorage.getItem('LinesMan2'),[
      // Validators.required,
    ])
   
  },{validators:[differentTeams,differentMen,differentlinsemen]});
 
  get homeTeam(){return this.editMatchForm.get('homeTeam')}
  get awayTeam(){return this.editMatchForm.get('awayTeam')}
  get matchVenue(){return this.editMatchForm.get('matchVenue')}
  get mainReferee(){return this.editMatchForm.get('mainReferee')}
  get date(){return this.editMatchForm.get('date')}
  // get time(){return this.editMatchForm.get('time')}
  get linseman1(){return this.editMatchForm.get('linseman1')}
  get linseman2(){return this.editMatchForm.get('linseman2')}

  editMatch(){

    let cnf=confirm('Are you sure you want to update the match data ?')
    if(cnf){
      let matchData={

        "HomeTeam":this.homeTeam?.value || this.chosenMatch.HomeTeam,
        "AwayTeam":this.awayTeam?.value || this.chosenMatch.AwayTeam,
        "StadiumName":this.matchVenue?.value || this.chosenMatch.StadiumName,
        "MatchDate": this.date?.value || this.MatchDate,
        // "MatchTime":this.time?.value,
        "MainReferee":this.mainReferee?.value || this.chosenMatch.MainReferee,
        "LinesMan1":this.linseman1?.value || this.chosenMatch.LinesMan1,
        "LinesMan2":this.linseman2?.value || this.chosenMatch.LinesMan2
        
      }
      this._match.editMatch(matchData,this.matchID).subscribe(
        res=>{
          if(res.message=="Edit Successful"){
          alert("Your Data has been updated successfully")
          this.router.navigate(['/viewmatches'])
          }
        },
        err=>{
          if(err.error.msg=="Stadium already reserved"){
            alert("This Stadium is already reserved for another match at the same timre")

          }
        }
      )

    }

  }

}
