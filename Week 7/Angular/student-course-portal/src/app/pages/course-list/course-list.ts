import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../services/course';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: any[] = [];
  isLoading = true;
  selectedCourseId: number | null = null;
  courseCount = 0;
ngOnInit(): void {
const search = this.route.snapshot.queryParamMap.get('search');

if (search) {
  console.log('Search:', search);
}

  setTimeout(() => {
    

    this.courses = this.courseService.getCourses();

    this.courseCount = this.courseService.getCourseCount();
    this.isLoading = false;

  }, 1500);

}
updateSearch(search: string) {

  this.router.navigate(
    ['/courses'],
    {
      queryParams: {
        search: search
      }
    }
  );

}
constructor(
  private courseService: Course,
  private router: Router,
  private route: ActivatedRoute
) {}
trackByCourseId(index: number, course: any) {

  return course.id;

}
  onEnroll(courseId: number) {

    console.log('Enrolling in course:', courseId);

    this.selectedCourseId = courseId;

  }
  viewCourse(id: number) {
  this.router.navigate(['/courses', id]);
}

}