import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Aparca'm";

  constructor(private router: Router) {
  }

  goToAddUser() {
    this.router.navigate(['/', 'newuser']);
  }
  goToLogin() {
    this.router.navigate(['/', 'user']);
  }
  goToUserList() {
    this.router.navigate(['/', 'users']);
  }
  goToAddParking() {
    this.router.navigate(['/', 'parking']);
  }
  goToParkingList() {
    this.router.navigate(['/', 'parkings']);
  }

  //mínim IRENE GORDUN

  goToReportForm(){
    this.router.navigate(['/', 'newReport']);
  }
  goReportList(){
    this.router.navigate(['/', 'reportsList']);
  }
  
}
