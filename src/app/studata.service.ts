import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from './Student'

@Injectable({
    providedIn: 'root'
})
export class StudataService {
    //userListUrl: string = "/linhq/users";
    userListUrl: string = "assets/users.json";
    current:Student|null = null;

    constructor(private client: HttpClient) {}

    getStudents(): Observable<Student[]> {
        return this.client.get<Student[]>(this.userListUrl);
    }
    
    public set Current(stu : Student|null) {
        this.current = stu;
    }

    
    public get Current() : Student|null {
        return this.current;
    }
    
    
}
