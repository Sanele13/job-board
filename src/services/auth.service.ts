import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly user: Observable<User> = new Observable<User>();

  constructor() {
    this.user = new Observable<User>(subscriber => {
      subscriber.next({
        name: 'John',
        lastName: 'Doe',
        email: 'john.doe@test.com',
        contactNumber: '1234567890',
        avatar: '/assets/profile_pic.png'
      });
    });
  }

  login(email: string, password: string): Observable<User> {
    return this.user;
  }

  register(username: string, password: string, confirmPassword: string): Observable<User> {
    return this.user;
  }

  logout() {

  }

  getUser(): Observable<User> {
    return this.user;
  }

  save(user: User): Observable<User> {
    return new Observable<User>(subscriber => {
      subscriber.next(user);
    });
  }
}
