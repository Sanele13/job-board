import { Injectable } from '@angular/core';
import {Application} from '../models/application.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  sendApplication(application: Application): Observable<Application> {
    return new Observable<Application>(subscriber => {
      subscriber.next(application);
    });
  }
}
