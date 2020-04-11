import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.less']
})
export class DepartmentsListComponent implements OnInit {
  departments$;

  constructor(private service: DepartmentsService) {}

  ngOnInit() {
    this.fetchDepartments();
  }

  fetchDepartments() {
    this.departments$ = this.service.fetchDepartments();
  }

  deleteDepartment(id: number) {
    this.service.deleteDepartment(id);
    this.fetchDepartments();
  }
}
