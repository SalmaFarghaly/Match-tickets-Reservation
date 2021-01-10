import {AbstractControl} from '@angular/forms'
import {FormGroup} from '@angular/forms'


// export function differentTeams1(control:AbstractControl) {

// //   let pass = group.get('password')
// //   let confirmPass = group.get('cnfPassword')
//   const awayTeam=control.root.get('awayTeam');

//   if(awayTeam&&control.value&&awayTeam.value!=''&&control.value!=''){

//     console.log(awayTeam.value)
//     console.log(control.value)
//     return awayTeam.value === control.value ? { 'Same': true }:null   
//   }
//   return null;
// }
export function differentTeams(control:AbstractControl) {

//   let pass = group.get('password')
//   let confirmPass = group.get('cnfPassword')
  const awayTeam=control.get('awayTeam')?.value;
  const homeTeam=control.get('homeTeam')?.value;

  if(awayTeam&&homeTeam&&awayTeam!==''&&homeTeam!==''){

    // console.log(awayTeam.value)
    // console.log(control.value)
    return awayTeam=== homeTeam ? { 'Same': true }:null   
  }
  return null;
}
export function differentMen(control:AbstractControl) {

//   let pass = group.get('password')
//   let confirmPass = group.get('cnfPassword')
  const mainReferee=control.get('mainReferee')?.value;
  const linseman1=control.get('linseman1')?.value;
  const linseman2=control.get('linseman2')?.value;

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

  const linseman1=control.get('linseman1')?.value;
  const linseman2=control.get('linseman2')?.value;

  if(linseman1&&linseman2&&linseman2!==''&&linseman1!==''){
    if(linseman2===linseman1){
        return{
            'SameL1L2':true
        }
    }   
  }
  return null;
}
