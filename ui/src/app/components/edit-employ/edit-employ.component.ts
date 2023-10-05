import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-employ',
  templateUrl: './edit-employ.component.html',
  styleUrls: ['./edit-employ.component.css']
})

export class EditEmployComponent {
  form: FormGroup
  editEmp = {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    qualification: '',
    mobileNumber: 11,
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    state: ''
  }

  constructor(
   private formBuilder: FormBuilder,
   private http: HttpClient,
   private router: Router,
   private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];        
      if(id){
        this.http.get(`http://localhost:5000/api/employ/fetch/${id}`).subscribe(
          (emp)=>{
            console.log('emp', emp);
            // this.editEmp = {...emp};
          }, (err)=>{
        Swal.fire("Error", err.error.message, "error");
      }) 
      }
    });

     this.form = this.formBuilder.group({
      firstName: [this.editEmp.firstName, Validators.required],
      lastName: [this.editEmp.lastName, Validators.required],
      age: [this.editEmp.age, Validators.required],
      gender: [this.editEmp.gender, Validators.required],
      qualification: [this.editEmp.qualification, Validators.required],
      mobileNumber: [this.editEmp.mobileNumber, Validators.required],
      email: [this.editEmp.email, [Validators.required, Validators.email]],
      password: [this.editEmp.password, Validators.required],
      confirmPassword: [this.editEmp.confirmPassword, Validators.required],
      city: [this.editEmp.city, Validators.required],
      state: [this.editEmp.state, Validators.required],
    });
  }

  submit():void {
    if (this.form.valid) {
      const employ = this.form.getRawValue()
      console.log('Form Updated:', employ);
      
      this.route.queryParams.subscribe(params => {
        const id = params['id'];        
        if(id){
          this.http.put(`http://localhost:5000/api/employ/update/${id}`, employ, {
            withCredentials: true
        }).subscribe(()=>this.router.navigate(['/']), (err)=>{
          Swal.fire("Error", err.error.message, "error");
        })
        }
      });
    }
  }
}
