import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Request{
  constructor(
    public _id : string,
    public name : string,
    public firstName : string,
    public lastName : string,
    public email : string,
    public status : string
  ){

  }
}
@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {
  requests!: Request[];
  private request_server = 'http://localhost:3000/posts';
  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    this.getRequests();
    
  }
  getRequests(){
    this.http.get<any>(this.request_server).subscribe(
      response => {
        console.log(response);
        this.requests = response;
      }
    );
    
  }
  onApprove(request: Request){
    if (request.status == "pending"){
      request.status = "approved";
      const editURL = 'http://localhost:3000/posts/' + request._id;
      this.http.post(editURL, request.status)
        .subscribe((results) => {
          this.ngOnInit();
        });
    }
    else {
      alert("Manager already approved");
    }
    
  }

}
