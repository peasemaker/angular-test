import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DepartmentDetailComponent } from './departments/department-detail/department-detail.component';
import { DepartmentCreateComponent } from './departments/department-create/department-create.component';
import { DepartmentEditComponent } from './departments/department-edit/department-edit.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DepartmentsListComponent,
    DepartmentDetailComponent,
    DepartmentCreateComponent,
    DepartmentEditComponent,
    EmployeesListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
