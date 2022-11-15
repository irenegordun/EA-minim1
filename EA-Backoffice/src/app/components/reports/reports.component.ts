import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectableObservable, tap } from 'rxjs';

import { Report } from '../../interfaces/report.interface';
import { ReportsService } from 'src/app/services/report.service';

import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

//MÍNIM 1 IRENE GORDUN --> gestor de denuncies

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: Report[]=[];
  
  constructor(private reportSrv: ReportsService,public dialog: MatDialog) { }


  ngOnInit(): void {
    this.reportSrv.getReports()
    .pipe(
      tap((reports: Report[]) => this.reports = reports)
    )
    .subscribe();
  }
 
  deleteReport(id : string): void {
    this.reportSrv.delete(id!).subscribe(
      data =>  { if(data._id == id){
        this.reports = this.reports.filter(report => report._id != data._id)
      }}
    );
    location.reload();
  }
  
  //update

  /*updateOneReport(report: Report): void {
    //let newDescription = (<HTMLInputElement>document.getElementById("newDescription")).value;
    //let newImportance = (<HTMLInputElement>document.getElementById("newImportance")).value;
    console.log(report.description);
    console.log(report.importance);
    const editedReport: Report = {
      _id: report._id,
      description: report.description,
      importance: report.importance,
    } 
    this.reportSrv.updateReport(editedReport, report._id!).subscribe({
      next: data => {
        console.log(data);
      }, 
      error: error => {
      console.log(error);
      }
    })
  }
  */

  /*ReportAdd(report: Report): void{
      this.reportSrv.addReport(report).subscribe(
        data => {if(data.reportingUser == report.reportingUser){
          this.reports.push(data);
        }}
      )
  }*/
  
}
