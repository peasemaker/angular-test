import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { DepartmentCreateComponent } from './departments/department-create/department-create.component';
import { DepartmentDetailComponent } from './departments/department-detail/department-detail.component';
import { DepartmentEditComponent } from './departments/department-edit/department-edit.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/departments',
    pathMatch: 'full'
  },
  {
    path: 'departments',
    component: DepartmentsListComponent
  },
  {
    path: 'employees',
    component: EmployeesListComponent
  },
  {
    path: 'departments/create',
    component: DepartmentCreateComponent
  },
  {
    path: 'departments/detail/:id',
    component: DepartmentDetailComponent
  },
  {
    path: 'departments/edit/:id',
    component: DepartmentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
