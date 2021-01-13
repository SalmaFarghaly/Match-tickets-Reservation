import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.scss']
})
export class ManagerHomeComponent implements OnInit {

  loaded=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loaded=true;
  }
  createMatch(){
    this.router.navigate(['/managerhome/creatematch']);
  }
  viewMatches(){
    this.router.navigate(['viewmatches']);
  }

}
