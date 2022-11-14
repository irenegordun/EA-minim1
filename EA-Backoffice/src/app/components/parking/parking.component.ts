import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Parking } from 'src/app/interfaces/parking';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  @Input() parking!: Parking
  @Output() cancelParking = new EventEmitter<Parking>();
  @Output() updateParking = new EventEmitter<Parking>();
  constructor() { }

  ngOnInit(): void {
  }
  cancel():void{
    this.cancelParking.emit(this.parking);
    location.reload();
  }
  update(){
    this.updateParking.emit(this.parking);
    location.reload();
  }

}
