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
        cellNumber: '1234567890'
      });
    });
  }

  login(email: string, password: string): void {

  }

  logout() {

  }

  getUser(): Observable<User> {
    return this.user;
  }
}
