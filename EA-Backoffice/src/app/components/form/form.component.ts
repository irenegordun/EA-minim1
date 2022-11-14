import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user!: User;
  @Output() addUser = new EventEmitter<User>();
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6)])
  })
  constructor(private _fb: FormBuilder, private _userService: UsersService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.user=<User>this.userForm.value;
    console.log(this.user);
    //this.addUser.emit(this.user)
    this._userService.addUser(this.user).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
