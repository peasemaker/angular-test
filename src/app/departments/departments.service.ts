import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private http: HttpClient) {}

  fetchDepartments() {
    return this.http.get('/api/departments');
  }

  deleteDepartment(id: number) {
    return this.http.delete(`/api/departments/${id}`)
      .subscribe(() => console.log('department deleted'));
  }

  createDepartment(name: string, desc: string) {
    return this.http.post(`/api/departments`, {
      name,
      description: desc,
      id: Date.now()
    })
      .subscribe(() => console.log('department created'));
  }

  getDepartment(id: number) {
    console.log('id', id);

    return this.http.get(`/api/departments/${id}`);
  }

  editDepartment(id: number, name: string, desc: string) {
    return this.http.put(`/api/departments/${id}`, {
      name,
      description: desc
    })
      .subscribe(() => console.log('department changed'));
  }
}
