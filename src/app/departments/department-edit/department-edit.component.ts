import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.less']
})
export class DepartmentEditComponent implements OnInit {
  department$;
  constructor(
    private service: DepartmentsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.department$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.service.getDepartment(+params.get('id'));
        }
      ));
  }

  editDepartment(id: number, name: string, desc: string) {
    this.service.editDepartment(id, name, desc);
    this.router.navigate(['/departments']);
  }
}
