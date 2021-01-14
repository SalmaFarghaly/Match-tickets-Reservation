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
  tickets=[] ;//Ticket[];
  private toDelete: string = "";
  private ticket_server = 'http://localhost:3000/reservation/tickets';
  constructor(private http : HttpClient) {}
  
  ngOnInit(): void {
    this.getTickets();
  }
   getTickets(){
    this.http.get<any>(this.ticket_server).subscribe(
      response => {

        let tempTickets = response.tickets;
        let counter = 0//tempTickets.length;

   
        while (counter < tempTickets.length){

          let tempCounter=0//tempTickets[counter]


          let curTicket=tempTickets[counter].tickets
          while(tempCounter<curTicket.length){

          let ticketObj=new Ticket(curTicket[tempCounter][1],curTicket[tempCounter][0])

          this.tickets.push(ticketObj)
          tempCounter++;
          }
          counter++;
        }

      }
    );
   }
   onDelete(ticket,i){
    this.toDelete = ticket.seatNumber;
    let matchid=localStorage.getItem('id')
    console.log(this.toDelete);
    if (confirm("Are you sure you want to delete?")){
      const deleteURL = 'http://localhost:3000/reservation/cancel/' +matchid //this.toDelete;
      this.http.post(deleteURL,{
        "seatNo":this.toDelete
      })
      .subscribe((results) => {
        alert("You reservation has been canceled :) ")
        this.tickets=[];
        this.ngOnInit();
        },
        err=>{
          alert("Sorry we can't cancel your reservation !")
        }
        );
    }

}

}
