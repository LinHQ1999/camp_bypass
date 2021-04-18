import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Student} from './Student'

@Injectable({
    providedIn: 'root'
})
export class StudataService {
    // userListUrl: string = "/linhq/users";
    userListUrl: string = "assets/users.json";
    constructor(private client: HttpClient) {}

    getStudents(): Observable<Student[]> {
        return this.client.get<Student[]>(this.userListUrl);
    }
}
