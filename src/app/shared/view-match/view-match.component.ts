import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  show=true;
  isShown=true;
  imgUrl="../../../assets/teams-logo/";
  matches=[
    {
    "HomeTeam":"AL AHLY",
    "AwayTeam":"ENNPI",
    "Date":"01/11/2020",
    "Time":"5:10 PM",
    "Venue":"Cairo",
    "MainReferee":"Mohammed youssef",
    "FirstLinseman":"Mohammed youssef",
    "SecondLinseman":"Mohammed youssef"
  },
    {
    "HomeTeam":"AL AHLY",
    "AwayTeam":"ENNPI",
    "Date":"01/11/2020",
    "Time":"5:10 PM",
    "Venue":"Cairo",
    "MainReferee":"Mohammed youssef",
    "FirstLinseman":"Mohammed youssef",
    "SecondLinseman":"Mohammed youssef"
  },
    {
    "HomeTeam":"AL AHLY",
    "AwayTeam":"ENNPI",
    "Date":"01/11/2020",
    "Time":"5:10 PM",
    "Venue":"Cairo",
    "MainReferee":"Mohammed youssef",
    "FirstLinseman":"Mohammed youssef",
    "SecondLinseman":"Mohammed youssef"
  },
    {
    "HomeTeam":"AL AHLY",
    "AwayTeam":"ENNPI",
    "Date":"01/11/2020",
    "Time":"5:10 PM",
    "Venue":"Cairo",
    "MainReferee":"Mohammed youssef",
    "FirstLinseman":"Mohammed youssef",
    "SecondLinseman":"Mohammed youssef"
  }
]

  ngOnInit(): void {
    // $(document).ready(function(){
    //   $('button').click(function(){
    //   console.log("weeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    //     $("#view").fadeIn(4000);
    // });
    // })
  }
  get stateName(){
    return this.show?'show':'hide'
  }
  toggle(){
    this.show=!this.show
  }

}
