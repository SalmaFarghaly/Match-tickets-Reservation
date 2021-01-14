import { Component, OnInit } from '@angular/core';
import {MatchService} from '../view-match/services/matches/match.service'
import {Router} from '@angular/router'
import{AuthService} from '../../security/services/auth.service'
import * as $ from 'jquery' 
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-view-match',
  templateUrl: './view-match.component.html',
  styleUrls: ['./view-match.component.scss'],
  animations: [
    trigger('popOverState',[
      state('show',style({
        opacity:1
      })),
      state('hide',style({
        opacity:0
      })),
      transition("show=>hide",animate('200ms ease-out')),
      transition('hide=>show',animate('200ms ease-in'))

    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)'}),
        animate(1000),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(100%)'}),
        animate(1000)
      ])
    ]),

  ]
})
export class ViewMatchComponent implements OnInit {

  constructor(private _mauth:MatchService,private router:Router,private _auth:AuthService) { }

  type;
  show=true;
  isShown=true;
  matches;
  imgUrl="../../../assets/teams-logo/";



  ngOnInit(): void {
    this._mauth.viewMatches().subscribe(
      res=>{this.matches=res.match;console.log(this.matches)},
    )
    this.type=this._auth.userType()
  }

  get stateName(){
    return this.show?'show':'hide'
  }
  toggle(){
    this.show=!this.show
  }
  editMatch(idx){
   
    let match=this.matches[idx];
    localStorage.setItem('HomeTeam',match.HomeTeam);
    localStorage.setItem('AwayTeam',match.AwayTeam);
    localStorage.setItem('Date',match.MatchDate);
    localStorage.setItem('Venue',match.StadiumName);
    localStorage.setItem('Linesman1',match.LinesMan1);
    localStorage.setItem('LinesMan2',match.LinesMan2);
    localStorage.setItem('MainReferee',match.MainReferee);
    localStorage.setItem('id',match.MatchID);
    this.router.navigate(['/managerhome/editmatch'])



  }
  vacantSeats(idx){
    let match=this.matches[idx];
    localStorage.setItem('HomeTeam',match.HomeTeam);
    localStorage.setItem('AwayTeam',match.AwayTeam);
    localStorage.setItem('Date',match.MatchDate);
    localStorage.setItem('Venue',match.StadiumName);
    localStorage.setItem('Linesman1',match.LinesMan1);
    localStorage.setItem('LinesMan2',match.LinesMan2);
    localStorage.setItem('MainReferee',match.MainReferee);
    localStorage.setItem('id',match.MatchID);
    this.router.navigate(['/viewmatches'])
  }


}
