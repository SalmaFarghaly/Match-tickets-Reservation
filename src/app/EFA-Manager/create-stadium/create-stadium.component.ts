import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/security/services/auth.service';
import {MatchService} from '../../shared/view-match/services/matches/match.service'
@Component({

  selector: 'app-create-stadium',
  templateUrl: './create-stadium.component.html',
  styleUrls: ['./create-stadium.component.scss']
})
export class CreateStadiumComponent implements OnInit {


  
  selectedSeats;
  selectedRows;

  selectedSeatsNumber(){
    console.log(this.selectedSeats)
  }
  selectedRowsNumber(){
    console.log(this.selectedRows)
  }
  stadiumData={}
  constructor(private fb: FormBuilder,private _match:MatchService) { }

  ngOnInit(): void {
  }
  msgErr="This field is required.";
  signInForm=new FormGroup({
    nameStadium:new FormControl('',[
      Validators.required,
    ]),
    nameRows:new FormControl('',[
      Validators.required,
    ]),
    nameSeats:new FormControl('',[
      Validators.required,
    ]),
  })
  get nameRows(){return this.signInForm.get('nameRows')}
  get nameSeats(){return this.signInForm.get('nameSeats')}
  get nameStadium(){return this.signInForm.get('nameStadium')}

  onFormSubmit(){
    this.stadiumData={
      'name':this.nameStadium.value,
      'rows':this.nameRows.value,
      'cols':this.nameSeats.value
    }
    this._match.createStaduim(this.stadiumData).subscribe(
      res=>{
        console.log(res)
        alert("Stadium created!!!!");
      },
      err=>{
        alert("Error in creating staduim")
      }
    )
    

  }
  

}
