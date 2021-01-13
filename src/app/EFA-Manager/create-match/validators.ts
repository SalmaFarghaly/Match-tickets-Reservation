import {AbstractControl} from '@angular/forms'
import {FormGroup} from '@angular/forms'

export function differentTeams(control:AbstractControl) {
  console.log("HELLO")

//   let pass = group.get('password')
//   let confirmPass = group.get('cnfPassword')
  const awayTeam=control.get('awayTeam')?.value;
  const homeTeam=control.get('homeTeam')?.value;
  console.log(awayTeam)
  console.log(homeTeam)

  if(awayTeam&&homeTeam&&awayTeam!==''&&homeTeam!==''){

    // console.log("HELLO")
    // console.log(control.value)
    return awayTeam=== homeTeam ? { 'Same': true }:null   
  }
  return null;
}
export function differentMen(control:AbstractControl) {
  console.log("HELLO")

//   let pass = group.get('password')
//   let confirmPass = group.get('cnfPassword')
  const mainReferee=control.get('mainReferee')?.value;
  const linseman1=control.get('linseman1')?.value;
  const linseman2=control.get('linseman2')?.value;
  console.log(mainReferee)
  console.log(linseman1)
  console.log(linseman2)

    if(mainReferee&&linseman1&&linseman1!==''&&mainReferee!==''){

        if(mainReferee===linseman1){
            return{
                'SameML1':true
            }
        }
    }
    if (mainReferee&&linseman2&&linseman2!==''&&mainReferee!==''){   
        if(mainReferee===linseman2){
            return{
                'SameML2':true
            }
        }   
    }
  return null;
}
export function differentlinsemen(control:AbstractControl) {
  console.log("HELLO")

  const linseman1=control.get('linseman1')?.value;
  const linseman2=control.get('linseman2')?.value;
  console.log(linseman1)
  console.log(linseman2)

  if(linseman1&&linseman2&&linseman2!==''&&linseman1!==''){
    if(linseman2===linseman1){
        return{
            'SameL1L2':true
        }
    }   
  }
  return null;
}
