import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { LogIn } from '../interfaces/login.interface';
import {User} from '../interfaces/user.interface';
import { Report } from '../interfaces/report.interface';

//MÍNIM 1 IRENE GORDUN --> gestor de denuncies

@Injectable({
  providedIn: 'root'
})
export class ReportsService { 
  report!: Report;
  private reportSource = new BehaviorSubject(this.report);
  currentUser = this.reportSource.asObservable();
  private apiURL = 'http://localhost:5432/api/reports/';
  constructor(private http: HttpClient) { }

  //create
  createReport(report: Report): Observable<Report> {
    return this.http.post<Report>(this.apiURL, report);
  }

  //get all
  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiURL);
  }

  //get one
  getOneReport(id: string): Observable<Report> {
    return this.http.get<Report>(this.apiURL + id);
  }

  //delete 
  delete(id: string): Observable<Report> {
    return this.http.delete<Report>(this.apiURL + id);
  }

  //update
  updateReport(report: Report, id: string): Observable<Report> {
    return this.http.put<Report>(this.apiURL + id, report)
  }
  
}
