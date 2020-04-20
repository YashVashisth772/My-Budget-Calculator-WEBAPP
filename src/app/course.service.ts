import { MessagesService } from './messages.service';
import { Course } from './course';
import { COURSES } from './mock_courses';
import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

 
  constructor(private messagesService: MessagesService) { }

  getCourses(): Observable<Course[]>{
    
    return of (COURSES);
  }

}
