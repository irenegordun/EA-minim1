import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ParkingService } from '../../services/parking.service';
import { Validators } from '@angular/forms';
import { Parking } from 'src/app/interfaces/parking';
import { ParkingsComponent } from 'src/app/components/parkings/parkings.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-parking2',
  templateUrl: './create-parking2.component.html',
  styleUrls: ['./create-parking2.component.css']
})
export class CreateParking2Component implements OnInit {
  message = "";
  parking!: Parking;
  @Output() addParking = new EventEmitter<Parking>();
  parkingForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    difficulty: new FormControl('', [Validators.required, Validators.max(2)]),
    country: new FormControl('Spain', Validators.required),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    spotNumber: new FormControl('', [Validators.required]),
    streetNumber: new FormControl('', [Validators.required])
  })
  constructor(private _fb: FormBuilder, private _parkingService: ParkingService, private router: Router) { }

  ngOnInit(): void { //Podem guardar el usuari complet al token
  }
  onSubmit() {
    this.parking = <Parking>this.parkingForm.value;
    //this.addParking.emit(this.parking);
    this._parkingService.addParking(this.parking).subscribe({
      next: data => {
        console.log(data);
        this.message = "Created!"
      },
      error: error => {
        console.log(error);
        this.message = "Error!"
      }
    })
    if (this.message == "Created!") {
      this.router.navigate(['parkings']);
    }
  }

}
