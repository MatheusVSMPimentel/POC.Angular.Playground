import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../models/User';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NgBrazil } from 'ng-brazil';
import { NgBrazilValidators } from 'ng-brazil';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { CustomValidators, CustomFormsModule } from 'ngx-custom-validators';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass, NgFor, NgBrazil , NgxMaskPipe, NgxMaskDirective, 
  ],
  providers: [CustomFormsModule],
  templateUrl: './registration.component.html',
  styles: ``
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  formResult: string = '';
  user: User = {name: "" ,
    document: "" ,
    email: "" ,
    password: "" ,
    passwordConfirm: ""};
    
constructor(private fb: FormBuilder) {}

  ngOnInit(){
    //let password = new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)])

    this.registerForm = this.fb.group({
      name :['', Validators.required],
      document : ['',[NgBrazilValidators.cpf]],
      email : ['',[Validators.required, Validators.email]],
      password: [''],
      passwordConfirm : ['', [CustomValidators.rangeLength([6,15]),Validators.required ]],
    }); 
/*     this.registerForm = new FormGroup({
      name : new FormControl(''),
      document : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
      passwordConfirm : new FormControl(''),
    });  */


    /* let name = new FormControl('');
    let document = new FormControl('');
    let email = new FormControl('');
    let password = new FormControl('');
    let passwordConfirm = new FormControl(''); */
  }

  propIsValid(propName: string): boolean  { 
    return (this.registerForm.get(propName)?.errors && (this.registerForm.get(propName)?.dirty || this.registerForm.get(propName)?.touched)) ?? false;
  }  

  addUser(){

    if(this.registerForm.dirty && this.registerForm.valid) {
    this.user = Object.assign({}, this.user, this.registerForm.value);
    this.formResult = JSON.stringify(this.registerForm.value);
    }else{
      this.formResult = "The register form is invalid."
    }
  }
}
