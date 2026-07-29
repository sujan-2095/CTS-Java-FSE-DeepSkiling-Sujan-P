import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule
],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile {

  student = {
    name: '',
    email: '',
    age: null as number | null
  };

  onSubmit() {
    console.log(this.student);
    alert('Student profile submitted successfully!');
  }

}