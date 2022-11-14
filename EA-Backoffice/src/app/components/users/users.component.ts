import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectableObservable, tap } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/user.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  constructor(private userSrv: UsersService,public dialog: MatDialog) { }


  ngOnInit(): void {
    this.userSrv.getUsers()
    .pipe(
      tap((users: User[]) => this.users = users)
    )
    .subscribe();

    
  }
  deleteOneUser(user: User): void {
    this.userSrv.delete(user._id!).subscribe(
      data =>  { if(data._id == user._id){
        this.users = this.users.filter(usr => usr._id != data._id)
      }}
    );
  }

  updateOneUser(user: User): void {
    //let newName = (<HTMLInputElement>document.getElementById("newName")).value;
    //let newEmail = (<HTMLInputElement>document.getElementById("newEmail")).value;
    console.log(user.name);
    console.log(user.email);
    const editedUser: User = {
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      points: user.points,
      myBookings: user.myBookings,
      myFavourites: user.myFavourites,
      myOpinions: user.myOpinions,
      myParkings: user.myParkings
    } 
    this.userSrv.updateUser(editedUser, user._id!).subscribe({
      next: data => {
        console.log(data);
      }, 
      error: error => {
      console.log(error);
      }
    })
  }

  userAdd(user: User): void{
      this.userSrv.addUser(user).subscribe(
        data => {if(data.name == user.name){
          this.users.push(data);
        }}
      )
  }

}
