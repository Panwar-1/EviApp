import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitter/emitter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  message= []
  
  constructor(private http:HttpClient,private router: Router){}

  ngOnInit():void{
   this.http.get('http://localhost:5000/api/employ/fetch', {
    withCredentials:true
   }).subscribe((res:any)=> {
      this.message  = res.Employ;
      Emitters.authEmitter.emit(true)
   }, (err)=>{
    this.message = err
    Emitters.authEmitter.emit(false)
   })
  }
   
  addEmployee():void{
    this.router.navigate(['/employee'])
  }

  editEmployee(id:any):void{
    this.router.navigate(['/edit-employ'], { queryParams: { id: id } })
  }

  deleteEmployee(id:any):void{
  this.http.delete(`http://localhost:5000/api/employ/delete/${id}`).subscribe(()=> console.log('Sucessfully deleted'))
  }

}
