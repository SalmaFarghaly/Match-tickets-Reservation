import { Component, OnInit } from '@angular/core';
import {NgbModalConfig, ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class StadiumComponent implements OnInit {

  constructor(private modalService: NgbModal, private http : HttpClient) { }
  closeResult : string;
  openModal : boolean = false;
  ngOnInit(): void {
  }
  //variable declarations
  stadiumName:string = "Cairo International Stadium";


  rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
  selected: string[] = [];

  ticketPrice: number = 120;
  totalPrice: number = 0;
  currency: string = "جنيه";

  //return status of each seat
  getStatus(seatPos: string) {
      if(this.reserved.indexOf(seatPos) !== -1) {
          return 'reserved';
      } else if(this.selected.indexOf(seatPos) !== -1) {
          return 'selected';
      }
      else{
        return ''
      }
  }
  //clear handler
  clearSelected = function() {
      this.selected = [];
  }
  //click handler
  seatClicked = function(seatPos: string) {
      var index = this.selected.indexOf(seatPos);
      
      if(index !== -1) {
          // seat already selected, remove
          this.selected.splice(index, 1)
      } else {
          //push to selected array only if it is not reserved
          if(this.reserved.indexOf(seatPos) === -1)
              this.selected.push(seatPos);
      }
  }
  //Buy button handler
  showSelected = function() {
      if(this.selected.length > 0) {
          if(confirm("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length) +"\n Do you want to proceed to the payment?"))
          {
              this.openModal = true;
              this.modalService.open();
          }
      } else {
          alert("No seats selected!");
      }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  submitForm(creditnumber,pinnumber){
    //send creditnumber, pinnumber, selected array, matchid
  }

}
