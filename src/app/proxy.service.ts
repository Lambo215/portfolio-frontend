import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProxyService {
  getRecords(): Observable<any[]> {
    return this.http.get<any[]>('/echo/get/json');
  }

  constructor(private http: HttpClient) {}
}
