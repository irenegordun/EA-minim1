import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Report } from 'src/app/interfaces/report.interface';
import { ReportsService } from 'src/app/services/report.service'

//MÍNIM 1 IRENE GORDUN --> gestor de denuncies

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})

export class ReportFormComponent implements OnInit {
  report!: Report;
  @Output() addReport = new EventEmitter<Report>();
  reportForm = new FormGroup({
    reportingUser: new FormControl(''),
    description: new FormControl(''),
    importance: new FormControl(),
  })
  constructor(private _fb: FormBuilder, private _reportService: ReportsService) { }

  ngOnInit(): void {
  /*  reports: Report[]=[];
  @Input() report!: Report
  @Output() delete = new EventEmitter<Report>();
  @Output() updateUser = new EventEmitter<Report>(); */
  }
  onSubmit(){
    this.report=<Report>this.reportForm.value;
    console.log(this.report);
    this._reportService.createReport(this.report).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    })
  }


}
