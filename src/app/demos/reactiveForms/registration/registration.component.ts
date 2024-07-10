import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './models/User';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NgBrazil } from 'ng-brazil';
import { NgBrazilValidators } from 'ng-brazil';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { CustomValidators, CustomFormsModule } from 'ngx-custom-validators';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-validation';
import { email } from 'ngx-custom-validators/src/app/email/validator';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass, NgFor, NgBrazil , NgxMaskPipe, NgxMaskDirective, 
  ],
  providers: [CustomFormsModule],
  templateUrl: './registration.component.html',
  styles: ``
})
export class RegistrationComponent implements OnInit, AfterViewInit {

  registerForm: FormGroup = new FormGroup({});
  formResult: string = '';
  user: User = {name: "" ,
    document: "" ,
    email: "" ,
    password: "" ,
    passwordConfirm: ""};

    validationMessage: ValidationMessages = {};
    genericValidator: GenericValidator = new  GenericValidator(this.validationMessage);
    displayMessage: DisplayMessage = {};


constructor(private fb: FormBuilder) {
  this.validationMessage = {
    name:{
      required: 'Fill in the name field.',
      minLength:'The name field must be at least 2 characters long.',
      maxLength:'The name field cannot be longer than 150 characters.'
    },
    document:{
      cpf: 'The Document inserted is invalid.',
      required: 'Fill in the name field.'
    },
    email: {
      required: 'Fill in the name field.',
      email: 'The E-mail inserted is invalid.'
    },
    password:{
      required: 'Fill in the name field.',
      rangeLength: 'The password must be between 6 and 15 characters long.'
    },
    passwordConfirm:{
      equalTo: 'The password confirmation field must match the password field.'
    }
  }
}
  
  ngOnInit(){
    let password = new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)])

    this.registerForm = this.fb.group({
      name :['', Validators.required, CustomValidators.rangeLength([2,150])],
      document : ['',[NgBrazilValidators.cpf]],
      email : ['',[Validators.required, Validators.email]],
      password,
      passwordConfirm : ['', [CustomValidators.rangeLength([6,15]),Validators.required, CustomValidators.equalTo(password)]],
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

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

}
