import { Component, OnInit } from '@angular/core';
import employees from '../employees';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  constructor(public employeeService: EmployeeService) {
    // setTimeout(() => {
    //   this.name = 'School Of Net';
    // }, 3000);
   }

  ngOnInit() {
  }

  addEmployee() {
    const employee = Object.assign({}, this.employee);
    this.employeeService.addEmployee(employee);
  }

}
