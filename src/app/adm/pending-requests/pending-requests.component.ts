import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  private deleteID: string = "";
  private request_server = 'http://localhost:3000/adm/getRequests';
  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    this.getRequests();
    
  }
  getRequests(){
    this.http.get<any>(this.request_server).subscribe(
      response => {
        console.log(response);
        this.requests = response;
        console.log(this.requests);
      }
    );
    
  }
  onApprove(request: Request){
    if (request.status == "pending"){
      request.status = "approved";
      const editURL = 'http://localhost:3000/adm/approve/' + request._id;
      this.http.post(editURL, {})
        .subscribe((results) => {
          this.ngOnInit();
        });
    }
    else {
      alert("Manager already approved");
    }
    
  }
  onDecline(request: Request){
    this.deleteID = request._id ;
    console.log(this.deleteID);
    if (confirm("Are you sure you want to decline request? Remember that declining request will delete the user.")){
      const deleteURL = 'http://localhost:3000/adm/decline/' + this.deleteID;
      this.http.post(deleteURL,{})
        .subscribe((results) => {
          this.ngOnInit();
        });
    }

  }



}
