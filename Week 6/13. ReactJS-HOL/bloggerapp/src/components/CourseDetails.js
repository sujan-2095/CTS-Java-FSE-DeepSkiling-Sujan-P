import React from 'react';
import { courses } from '../data/courses';

const CourseDetails = () => {
  
  // Using if...else and element variables for conditional rendering
  let content;
  
  if (courses && courses.length > 0) {
    content = courses.map(course => {
      const courseInfo = (
        <div key={course.id} className="card">
          <h3>{course.courseName}</h3>
          <p>Start Date: {course.courseDate}</p>
        </div>
      );
      return courseInfo;
    });
  } else {
    content = <p>No courses found.</p>;
  }

  return (
    <div className="section">
      <h2>Course Details</h2>
      {content}
    </div>
  );
};

export default CourseDetails;
