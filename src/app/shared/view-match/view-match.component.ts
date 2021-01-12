import { Component, OnInit } from '@angular/core';
import {MatchService} from '../view-match/services/matches/match.service'
import {Router} from '@angular/router'
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
      transition("show=>hide",animate('1000ms ease-out')),
      transition('hide=>show',animate('1000ms ease-in'))

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

  constructor(private _mauth:MatchService,private router:Router) { }

  show=true;
  isShown=true;
  matches;
  imgUrl="../../../assets/teams-logo/";
//   matches=[
//     {
//     "HomeTeam":"AL AHLY",
//     "AwayTeam":"ENNPI",
//     "Date":"01/11/2020",
//     "Time":"5:10 PM",
//     "Venue":"Cairo",
//     "MainReferee":"Mohammed youssef",
//     "FirstLinseman":"Mohammed youssef",
//     "SecondLinseman":"Mohammed youssef"
//   },
//     {
//     "HomeTeam":"AL AHLY",
//     "AwayTeam":"ENNPI",
//     "Date":"01/11/2020",
//     "Time":"5:10 PM",
//     "Venue":"Cairo",
//     "MainReferee":"Mohammed youssef",
//     "FirstLinseman":"Mohammed youssef",
//     "SecondLinseman":"Mohammed youssef"
//   },
//     {
//     "HomeTeam":"AL AHLY",
//     "AwayTeam":"ENNPI",
//     "Date":"01/11/2020",
//     "Time":"5:10 PM",
//     "Venue":"Cairo",
//     "MainReferee":"Mohammed youssef",
//     "FirstLinseman":"Mohammed youssef",
//     "SecondLinseman":"Mohammed youssef"
//   },
//     {
//     "HomeTeam":"AL AHLY",
//     "AwayTeam":"ENNPI",
//     "Date":"01/11/2020",
//     "Time":"5:10 PM",
//     "Venue":"Cairo",
//     "MainReferee":"Mohammed youssef",
//     "FirstLinseman":"Mohammed youssef",
//     "SecondLinseman":"Mohammed youssef"
//   }
// ]


  ngOnInit(): void {
    this._mauth.viewMatches().subscribe(
      res=>{console.log(res.match);this.matches=res.match;console.log(this.matches)},
      err=>console.log(err)
    )
  }
  // ngAfterViewInit(){
  //   // console.log("WWEEEEEEEEEEEEEEEEEEEEEE")
  // //   $(document).ready(function(){
  // //   $('#edit').click(function (event) {
  // //     alert($(this).index());
  // //   });
  // // })
  // // console.log("WWEEEEEEEEEEEEEEEEEEEEEE")
  // }
  get stateName(){
    return this.show?'show':'hide'
  }
  toggle(){
    this.show=!this.show
  }
  editMatch(idx){
   
    let match=this.matches[idx];
    console.log(match.MatchDate);
    localStorage.setItem('HomeTeam',match.HomeTeam);
    localStorage.setItem('AwayTeam',match.AwayTeam);
    localStorage.setItem('Date',match.MatchDate);
    // localStorage.setItem('Time',match.MatchTime);
    localStorage.setItem('Venue',match.StadiumName);
    localStorage.setItem('Linesman1',match.LinesMan1);
    localStorage.setItem('LinesMan2',match.LinesMan2);
    localStorage.setItem('MainReferee',match.MainReferee);
    localStorage.setItem('id',match.MatchID);
    this.router.navigate(['/managerhome/editmatch'])

    // session_start();
    // console.log("INDEXXXXXXXXXXXXXXXXXXXXXXXXX")
    // console.log(event)

  }
  // editMatch($this){
  //   console.log($this)
  //   // get which card has been clicked and store it's data in a session 
  //   // for the next page.
  //   this.router.navigate(['/managerhome/editmatch'])
  // }

}
