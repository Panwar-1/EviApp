import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup

  constructor(
   private formBuilder: FormBuilder,
   private http: HttpClient,
   private router: Router,
  ){}


  ngOnInit():void{
    this.form = this.formBuilder.group({
      email: "",
      password: ""
    })
   }
   
   validateEmail = (email:any)=>{
    const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email.match(validEmailRegex)){
      return true;
    }else{
      return true;
    }
   }


   submit():void{
    const user = this.form.getRawValue()
      if(user.email == ""|| user.password == ""){
        Swal.fire("Error", "Please enter all the fields", "error");
      }
      else if(!this.validateEmail(user.email)){
        Swal.fire("Error", "Please enter valid email", "error");
      }else{
        this.http.post("http://localhost:5000/api/login", user, {
          withCredentials: true
        }).subscribe(()=>this.router.navigate(['/']), (err)=>{
          Swal.fire("Error", err.error.message, "error");
        })
      }

   }
}
