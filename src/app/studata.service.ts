import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Student} from './Student'
import {Students} from './Students';

@Injectable({
  providedIn: 'root'
})
export class StudataService {
  constructor(private client:HttpClient) { }

  getStudents(): Observable<Student[]>{
    //return of(Students);
    return this.client.get<Student[]>("http://localhost/users.json");
  }

  getStudent(sno:string):Observable<Student|undefined>{
    return of(Students.find(stu => stu.sno === sno));
  }
}
