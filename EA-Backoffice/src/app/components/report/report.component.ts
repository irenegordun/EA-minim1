import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Report } from 'src/app/interfaces/report.interface';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() report!: Report
  @Output() deleteReport = new EventEmitter<Report>();
  @Output() updateReport = new EventEmitter<Report>();
  
 constructor() { }

  ngOnInit(): void {
  }

  delete():void{
    this.deleteReport.emit(this.report)
    location.reload();
  }

  update(description: string, importance: number){
    this.report.description = description;
    this.report.importance = importance;
    this.updateReport.emit(this.report);
    location.reload();
  }

}
