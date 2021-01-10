import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.scss']
})
export class ManagerHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  createMatch(){
    this.router.navigate(['/managerhome/creatematch']);
  }

}
