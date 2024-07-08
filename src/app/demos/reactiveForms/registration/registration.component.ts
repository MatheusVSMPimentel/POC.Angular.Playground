import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../models/User';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styles: ``
})
export class RegistrationComponent implements OnInit {
  
  registerForm: FormGroup = new FormGroup({});
  user: User = {name: "" ,
    document: "" ,
    email: "" ,
    password: "" ,
    passwordConfirm: ""};
constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.registerForm = this.fb.group({
      name :[''],
      document : [''],
      email : [''],
      password : [''],
      passwordConfirm : [''],
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

  addUser(){
    this.user = Object.assign({}, this.user, this.registerForm.value)
  }
}
