import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getNestedData(): Observable<any> {
    return this.http.get<any>('http://www.mocky.io/v2/5ed69651340000110106db45');
  }

  getData(): Observable<any> {
    return this.http.get<any>('http://www.mocky.io/v2/5ed669a6340000a0d106da36');
  }
}