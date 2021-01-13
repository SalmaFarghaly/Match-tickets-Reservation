import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/security/services/auth.service';

@Component({
  selector: 'app-create-stadium',
  templateUrl: './create-stadium.component.html',
  styleUrls: ['./create-stadium.component.css']
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
  constructor(private fb: FormBuilder,private _auth:AuthService) { }

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
    console.log("Valid Sign In data")
    this.stadiumData={
      'nameRows':this.nameRows.value,
      'nameSeats':this.nameSeats.value,
      'nameStadium':this.nameStadium.value
    }
    console.log(this.stadiumData)
    alert("Stadium Data:" + this.stadiumData);

  }
  

}
