import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EditEmployComponent } from './components/edit-employ/edit-employ.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'employee', component:EmployeeComponent
  },
  {
    path:'edit-employ', component:EditEmployComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
