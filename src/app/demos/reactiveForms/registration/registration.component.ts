import { AfterViewInit, Component, ElementRef, OnInit, viewChildren, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './models/User';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NgBrazil } from 'ng-brazil';
import { NgBrazilValidators } from 'ng-brazil';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { CustomValidators, CustomFormsModule } from 'ngx-custom-validators';
import { DisplayMessage, GenericValidator, ValidationMessages } from '../../../extensions/generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass, NgFor, NgBrazil, NgxMaskPipe, NgxMaskDirective,
  ],
  providers: [CustomFormsModule],
  templateUrl: './registration.component.html',
  styles: ``
})

export class RegistrationComponent implements OnInit, AfterViewInit {
  title = 'Demo Register';
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef<any>[];
  dirtyFormNotSended: boolean = false;
  registerForm: FormGroup = new FormGroup({});
  formResult: string = '';
  user: User = {
    name: "",
    document: "",
    email: "",
    password: "",
    passwordConfirm: ""
  };

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};


  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      name: {
        required: 'Fill in the name field.',
        minlength: 'The name field must be at least 2 characters long.',
        maxlength: 'The name field cannot be longer than 150 characters.'
      },
      document: {
        cpf: 'The Document inserted is invalid.',
        required: 'Fill in the document field.'
      },
      email: {
        required: 'Fill in the email field.',
        email: 'The E-mail inserted is invalid.'
      },
      password: {
        required: 'Fill in the password field.',
        rangeLength: 'The password must be between 6 and 15 characters long.'
      },
      passwordConfirm: {
        equalTo: 'The password confirmation field must match the password field.'
      }
    }
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    let password = new FormControl("", [Validators.required, CustomValidators.rangeLength([6, 15])])

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      document: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      password,
      passwordConfirm: ['', [CustomValidators.rangeLength([6, 15]), Validators.required, CustomValidators.equalTo(password)]],
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

  propIsValid(propName: string): boolean {return(this.registerForm.get(propName)?.errors && (this.registerForm.get(propName)?.dirty || this.registerForm.get(propName)?.touched)) ?? false};

  addUser() {

    if (this.registerForm.dirty && this.registerForm.valid) {
      this.dirtyFormNotSended = false;
      this.user = Object.assign({}, this.user, this.registerForm.value);
      this.formResult = JSON.stringify(this.registerForm.value);
    } else {
      this.formResult = "The register form is invalid.";
    }
  }

  ngAfterViewInit(): void {

    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    let controlDigits: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'keyup'));

    merge(...controlDigits).subscribe(() => {
      this.displayMessage = this.genericValidator.messageProcessing(this.registerForm);
      this.dirtyFormNotSended = true;
    })

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.messageProcessing(this.registerForm);
      this.dirtyFormNotSended = true;
    })
  }

}
