import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.less']
})
export class DepartmentDetailComponent implements OnInit {
  department$;

  constructor(
    private service: DepartmentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.department$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getDepartment(+params.get('id'));
      }
    ));
  }

}
