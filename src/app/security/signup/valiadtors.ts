import {AbstractControl} from '@angular/forms'
import {FormGroup} from '@angular/forms'


export function passwordValidator(control:AbstractControl){
    // pass:String=control.value;
    if(control.value!==undefined&&control.value!==null){
        let regexPass:RegExp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regexPass.test(control.value)){
            return {'NotMatch':true};
        }

    }

    return null;

}

export function checkPasswords(control:AbstractControl) {

//   let pass = group.get('password')
//   let confirmPass = group.get('cnfPassword')
  const pass=control.root.get('password');

  if(pass&&control.value&&pass.value!==''&&control.value!==''){
    console.log("passsss")
    console.log(pass.value)
    // console.log(confirmPass.value)
    return pass.value === control.value ? null : { 'NotSame': true }   
  }
  return null;
}