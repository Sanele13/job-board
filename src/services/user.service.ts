import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  uploadAvatar(file: File): Observable<User> {
    const formParams = new FormData();
    formParams.append('file', file);
    return this.httpClient.post<User>(`${environment.apiUrl}/users/avatar`, formParams);
  }
}
