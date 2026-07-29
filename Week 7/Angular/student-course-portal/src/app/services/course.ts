import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Course {

  getCourses() {
    return [
      {
        id: 1,
        name: 'Angular',
        code: 'ANG101',
        credits: 4,
        gradeStatus: 'passed'
      },
      {
        id: 2,
        name: 'Spring Boot',
        code: 'SPR201',
        credits: 3,
        gradeStatus: 'pending'
      },
      {
        id: 3,
        name: 'React',
        code: 'REA301',
        credits: 2,
        gradeStatus: 'failed'
      },
      {
        id: 4,
        name: 'Java',
        code: 'JAVA201',
        credits: 4,
        gradeStatus: 'passed'
      },
      {
        id: 5,
        name: 'Database',
        code: 'DB101',
        credits: 3,
        gradeStatus: 'pending'
      }
    ];
    
  }
getCourseById(id: number) {
  return this.getCourses().find(course => course.id === id);
}
  getCourseCount() {
    return this.getCourses().length;
  }

}