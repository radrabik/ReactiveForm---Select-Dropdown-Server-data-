import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

interface CourseCategory {
  code: string;
  description: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  form = this.fb.group({
    category: ['BEGINNER', Validators.required],
  });


  // 
  courseCategories$ : Observable<CourseCategory[]>;

  constructor(private fb: FormBuilder, private courses:CoursesService) { }

  ngOnInit() {
    this.courseCategories$ = this.courses.findCourseCategories();
  }

}
