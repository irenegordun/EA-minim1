import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { Parking } from '../../interfaces/parking';
import { ParkingService } from '../../services/parking.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})

export class ParkingsComponent implements OnInit {
parkings!: Parking[];
   constructor(private parkingSrv: ParkingService,public dialog: MatDialog) { }

  ngOnInit(): void {
  this.parkingSrv.getParkings()
      .pipe(
        tap((parkings: Parking[]) => this.parkings = parkings)
      )
      .subscribe();
  }

  cancelOneParking(parking: Parking): void {
    this.parkingSrv.deleteParking(parking._id!).subscribe({
      next: data => {
        console.log(data);
      }, 
      error: error => {
      console.log(error);
      }
    })
  }
  
  updateOneParking(parking: Parking): void {
    let newPrice = (<HTMLInputElement>document.getElementById("newPrice")).value;
    console.log(newPrice);
    const editedParking: Parking = {
      _id: parking._id,
      user: parking.user,
      opinions:parking.opinions,
      email: parking.email,
      type: parking.type,
      price: newPrice,
      size: parking.size,
      difficulty: parking.difficulty,
      score: parking.score,
      city: parking.city,
      street: parking.street,
      spotNumber: parking.spotNumber,
      streetNumber: parking.streetNumber
    } 
    this.parkingSrv.updateUser(editedParking, parking._id!).subscribe({
      next: data => {
        console.log(data);
      }, 
      error: error => {
      console.log(error);
      }
    })
  }
}
