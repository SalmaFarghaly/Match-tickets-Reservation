import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Request{
  constructor(
    public id : string,
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
      const editURL = 'http://localhost:3000/posts/' + request.id;
      this.http.post(editURL, request.status)
        .subscribe((results) => {
          this.ngOnInit();
        });
    }
    else {
      alert("Manager already approved");
    }
    
  }
  onDelete(request: Request){
    this.deleteID = request.id ;
    console.log(this.deleteID);
    if (confirm("Are you sure you want to decline request? Remember that declining request will delete the user.")){
      const deleteURL = 'http://localhost:3000/posts/' + this.deleteID;
      this.http.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        });
    }

  }



}
