import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Student} from '../models/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders( {'Content-Type': 'application/json' } ),
  };
  private baseUrl = 'http://localhost:5128/api';

  getStudents(): Observable<Student[]> {
    const url = this.baseUrl +'/students/getallstudents';
    return this.httpClient.get<Student[]>(url, this.httpOptions);
  }
}
