import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './students-list.html',
  styleUrl: './students-list.css',
})
export class StudentsList {
  stdList: Student[] = [];
  constructor(private studentService: StudentService,private router :Router) {}

  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.studentService.getStudents()
        .subscribe({next: (data) => {this.stdList = data;
        console.log(data);},
          error:(e)=>console.error(e)
        });
  }
}
