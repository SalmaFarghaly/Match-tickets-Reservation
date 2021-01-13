import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

export class User{
  constructor(
    public id: string,
    public name : string,
    public firstName : string,
    public lastName : string,
    public email : string,
    public role : string,
    public status : string
  ){

  }
}

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users!: User[];
  private deleteID: string = "";
  private user_server = 'http://localhost:3000/getUsers';
  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.http.get<any>(this.user_server).subscribe(
      response => {
        console.log(response);
        this.users = response;
      }
    );
    
  }
  onDelete(user : User){
    this.deleteID = user.id ;
    console.log(this.deleteID);
    if (confirm("Are you sure you want to delete?")){
      const deleteURL = 'http://localhost:3000/adm/remove/' + this.deleteID;
      this.http.post(deleteURL,{})
      .subscribe((results) => {
        this.ngOnInit();
        });
    }

  }
}
