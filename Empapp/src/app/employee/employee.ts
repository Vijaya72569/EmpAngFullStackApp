import { Component, OnInit } from '@angular/core';
import { Empservice,Employees } from '../empservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {

  ngOnInit(): void {
    this.load();
  }

constructor(public empservice:Empservice){

}
 employees:Employees[]=[];
  emp:Employees={ename:"",esal:0};
  load(){
 this.empservice.getAll().subscribe(
  data=>this.employees=data);
  }
 SaveEmployee(){
  this.empservice.add(this.emp).subscribe(
    ()=>{
      this.emp={ename:' ',esal: 0};
      this.load();
    }
  )
 }
 UpdateEmployee(){
  this.empservice.update(this.emp).subscribe(
    ()=>{
      this.emp={ename:"",esal:0}
      this.load();
    }
  )
 }
 editEmployee(em:Employees)
 {
  this.emp={...em};
 }
deleteEmployee(id:number){
  if(confirm('Are you Sure to Delete This employee?'))
  {
    this.empservice.delete(id).subscribe(
      ()=>
        this.load()
    )
  }
}

}
