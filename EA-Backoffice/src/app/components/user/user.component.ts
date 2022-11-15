import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!: User
  @Output() deleteUser = new EventEmitter<User>();
  @Output() updateUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }
  delete():void{
    this.deleteUser.emit(this.user)
    location.reload();
  }
  update(newName: string, newEmail: string){
    this.user.name = newName;
    this.user.email = newEmail;
    this.updateUser.emit(this.user);
    location.reload();
  }
}