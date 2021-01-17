import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Exam } from '../../models/exams';
import { ExamService } from '../../shared/services/exam.service';
import { exams } from '../../shared/jsondata/exams.json';
import { routerTransition } from '../../router.animations';



@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css'],
  animations: [routerTransition()],
})
export class ExamListComponent implements OnInit {

  displayedColumns: string[] = ['examId', 'examCode', 'examDescription', 'examDate', 'examTime', 'examEndTime', 'isActive', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Exam>();
  exams: Exam[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private examservice: ExamService,
    private dialog: MatDialog
  ) {
    this.getExamData();
    this.dataSource = new MatTableDataSource(this.exams);
  }

  ngOnInit(): void {
  }

  getExamData() {

    this.exams = JSON.parse(JSON.stringify(exams));

    console.log('exams');
    console.log(this.exams);

    // this.examservice.getExams().subscribe((exams: Exam[]) => {
    //   this.exams = exams;
    //   this.dataSource.data = [...this.exams];
    // });
  }

}
