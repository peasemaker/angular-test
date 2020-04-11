import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.less']
})
export class DepartmentCreateComponent implements OnInit {
  constructor(
    private service: DepartmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  createDepartment(name: string, desc: string) {
    this.service.createDepartment(name, desc);

    this.router.navigate(['/departments']);
  }
}
