import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Ticket{
  constructor(
    public ticketID : string,
    public seatNumber : string 
    ) { }
}

@Component({
  selector: 'app-reserved-seats',
  templateUrl: './reserved-seats.component.html',
  styleUrls: ['./reserved-seats.component.css']
})
export class ReservedSeatsComponent implements OnInit {
  tickets!: Ticket[];
  private toDelete: string = "";
  private ticket_server = 'http://localhost:3000/adm/getUsers';
  constructor(private http : HttpClient) {}
  
  ngOnInit(): void {
    this.getTickets();
  }
   getTickets(){
    this.http.get<any>(this.ticket_server).subscribe(
      response => {
        console.log(response);
        this.tickets = response;
      }
    );
   }
   onDelete(ticket : Ticket){
    this.toDelete = ticket.seatNumber;
    console.log(this.toDelete);
    if (confirm("Are you sure you want to delete?")){
      const deleteURL = 'http://localhost:3000/adm/remove/' + this.toDelete;
      this.http.post(deleteURL,{})
      .subscribe((results) => {
        this.ngOnInit();
        });
    }

}

}
