import { Component, OnInit } from '@angular/core';
import {NgbModalConfig, ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../security/services/auth.service'
import {MatchService} from '../shared/view-match/services/matches/match.service'
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import {Router} from '@angular/router'
import { timer, Observable, Subject,of } from 'rxjs';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';


export class Ticket{
  constructor(
    public rows : string[],
    public cols :  number[],
    public seats:string[]
  ){

  }
}

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class StadiumComponent implements OnInit {

  constructor(private modalService: NgbModal, private http : HttpClient,private _auth:AuthService,private _match:MatchService
    ,private _router:Router) {
      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      
     }

  
  pinnumber:number;
  creditnumber:number;
  isLogged;
  closeResult : string;
  openModal : boolean = false;
  private fetchData$: Observable<string> = this._match.getSeats(localStorage.getItem('id'));
  private killTrigger: Subject<void> = new Subject();
  private refreshInterval$: Observable<any> = timer(0, 10000)
  
  .pipe(
  // This kills the request if the user closes the component 
  takeUntil(this.killTrigger),
  // switchMap cancels the last request, if no response have been received since last tick
  switchMap(() => this.fetchData$),
  // catchError handles http throws 
  catchError(error => of('Error'))
  );
  public statustext$: Observable<Ticket> = this.refreshInterval$;

  ngOnInit(): void {
    
    this.isLogged=this._auth.loggedIn();
    this.stadiumName=localStorage.getItem('Venue')+" Stadium";
    this.type=localStorage.getItem('type');
    let id=localStorage.getItem('id');
    this.statustext$.subscribe(
      res=>{
        console.log(res)
  
        this.rows=res.rows,
        this.cols=res.cols,
        this.reserved=res.seats
        console.log(this.rows)
        console.log(this.cols)
        console.log(this.reserved)
      }
    )


  }
  ReserveForm=new FormGroup({
    creditCard:new FormControl('',[
      Validators.required,
    ]),
    pinNumber:new FormControl('',[
      Validators.required,
    ]),
  })
  get creditCard(){return this.ReserveForm.get('creditCard')}
  get pinNumber(){return this.ReserveForm.get('pinNumber')}
  //variable declarations
  stadiumName:string = "";
  type:string="";


  rows: string[] //= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cols: number[] // = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reserved: string[];// = //['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
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
  showSelected(content) {
      if(this.selected.length > 0) {
          if(confirm("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length) +"\n Do you want to proceed to the payment?"))
          {
              this.openModal = true;
              this.modalService.open(content);
          }
      } else {
          alert("No seats selected!");
      }
  }

  open(content) {
    // this.showSelected()
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

  submitForm(){
    let matchid=localStorage.getItem('id')
    this.pinnumber
    this.creditnumber
    this.selected
    let data={
      'seatNo':this.selected,
      'creditCard':this.creditCard.value,
      'pinNumber':this.pinNumber.value
    }
    this._match.reserveSeats(matchid,data).subscribe(
      res=>{
        // console.log(res)
        // localStorage.setItem('tickets',res.ticket)
        this._router.navigate(['reservation'])
      },
      err=>{
        alert('Error in reversing seats !')
      }
    )
    //array of tickets 
    //send creditnumber, pinnumber, selected array, matchid
  }
  ngOnDestroy(){
    this.killTrigger.next();
  }

}
