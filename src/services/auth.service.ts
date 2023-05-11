import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthData, User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly user: Observable<User> = new Observable<User>();

  constructor(private httpClient: HttpClient) {
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

  static getToken(): string {
    const user: AuthData = JSON.parse(localStorage.getItem('authData'));
    return user.token;
  }

  login(authUser: AuthData): Observable<AuthData> {
    return this.httpClient.post<AuthData>(`${environment.apiUrl}/auth/login`, authUser).pipe(
      tap(user => {
        localStorage.setItem('authData', JSON.stringify(user));
      })
    );
  }

  register(authUser: AuthData): Observable<AuthData> {
    return this.httpClient.post<AuthData>(`${environment.apiUrl}/auth/register`, authUser);
  }

  logout() {

  }

  getUser(): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/users/currentUser`, {headers: {Authorization: `Bearer ${AuthService.getToken()}`}}).pipe(
      tap(user => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  save(user: User): Observable<User> {
    return this.httpClient.put<User>(`${environment.apiUrl}/users/currentUser`, user, {headers: {Authorization: `Bearer ${AuthService.getToken()}`}}).pipe(
      tap(result => {
        localStorage.setItem('user', JSON.stringify(result));
      })
    );
  }
}
