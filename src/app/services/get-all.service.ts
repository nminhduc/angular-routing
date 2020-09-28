import { AllModel } from './../models/all.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {
  constructor(private http: HttpClient) {}
  getAll() {
      const result1: AllModel = {
        id: '1',
        name: 'name 1'
      }
      const result2: AllModel = {
        id: '2',
        name: 'name 2'
      }
      return of([result1, result2]);
    // return this.http.get(`$/preview`, {
    // });
  }
}
