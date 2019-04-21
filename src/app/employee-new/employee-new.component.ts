import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = 'Luiz Carlos';
  employees = [];

  constructor() {
    setTimeout(() => {
      this.name = 'School Of Net';
    }, 3000);
   }

  ngOnInit() {
  }

  addEmployee() {
    this.employees.push(this.name);
    console.log(this.employees);
  }

}
