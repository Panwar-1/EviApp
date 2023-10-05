import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  form: FormGroup

  constructor(
   private formBuilder: FormBuilder,
   private http: HttpClient,
   private router: Router,
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      qualification: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  submit():void {
    if (this.form.valid) {
      const employ = this.form.getRawValue()
      console.log('Form submitted:', employ);

      this.http.post("http://localhost:5000/api/employ/create", employ, {
        withCredentials: true
      }).subscribe(()=>this.router.navigate(['/']), (err)=>{
        Swal.fire("Error", err.error.message, "error");
      })
    }
  }
}
