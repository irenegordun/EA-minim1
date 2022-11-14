import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parking } from 'src/app/interfaces/parking';

@Injectable({
    providedIn: 'root'
})
export class ParkingService {
    url = 'http://localhost:5432/api/parkings/';

    constructor(private http: HttpClient) { }

    getParkings(): Observable<Parking[]> {
      return this.http.get<Parking[]>(this.url);
    }

    addParking(parking: Parking): Observable<Parking> {
        return this.http.post<Parking>(this.url, parking);
    }

    deleteParking(id: string): Observable<Parking> {
        return this.http.delete<Parking>(this.url + id);
    }
    updateUser(parking: Parking, id: string): Observable<Parking> {
        console.log(id);
        console.log(parking);
        return this.http.put<Parking>(this.url + 'update/' + id, parking)
      }
}
