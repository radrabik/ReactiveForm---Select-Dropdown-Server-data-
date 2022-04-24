import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

interface CourseCategory {
  code: string;
  description: string;
}

const listCategories = [
  { code: 'BEGINNER', description: 'Beginner' },
  { code: 'INTERMEDIATE', description: 'Intermediate' },
  { code: 'ADVANCED', description: 'Advanced' },
];

@Injectable()
export class CoursesService {

  findCourseCategories(): Observable<CourseCategory[]> {
    return of(listCategories);
  }

}