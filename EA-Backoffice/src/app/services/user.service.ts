import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { LogIn } from '../interfaces/login.interface';
import {User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user!: User;
  message!: String;
  private userSource = new BehaviorSubject(this.user);
  currentUser = this.userSource.asObservable();
  private apiURL = 'http://localhost:5432/api/users/';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }

  delete(id: string): Observable<User> {
    return this.http.delete<User>(this.apiURL + id);
  }

  logIn(userData:LogIn): Observable<HttpResponse<User>>{
    return this.http.post<User>(this.apiURL + 'login/', userData, {observe: 'response'})
  }

  newUserLogged(user: User) {
    //console.log("user a service: " + JSON.stringify(user));
    this.userSource.next(user);
  }

  addUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.apiURL + '/register', user)
  }

  updateUser(user: User, id: string): Observable<User> {
    return this.http.put<User>(this.apiURL + 'update/' + id, user)
  }

  /* deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.apiURL + 'delete/' + id);
  } */
}
