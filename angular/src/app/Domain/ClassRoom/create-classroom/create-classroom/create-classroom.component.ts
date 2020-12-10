import { UserService } from './../../../../services/User/user.service';
import { UserPartOutPut } from './../../../../services/User/dtos/UserPartOutPut';
import { LessonFullOutPut } from './../../../../services/Lesson/dtos/LessonFullOutPut';
import { LessonService } from './../../../../services/Lesson/lesson.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClassRoomService } from './../../../../services/ClassRoom/ClassRoomService.service';
import { CreateClassRoomInput } from './../../../../services/ClassRoom/dtos/CreateClassRoomInput';
import { AppComponentBase } from '../../../../../shared/app-component-base';
import { Component, Injector, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrls: ['./create-classroom.component.css']
})
export class CreateClassRoomDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  classRoom: CreateClassRoomInput = new CreateClassRoomInput();

  lessons: LessonFullOutPut[] = [];
  selectedLesson: LessonFullOutPut;

  students: UserPartOutPut[] = [];
  selectedStudent: UserPartOutPut;

  constructor(injector: Injector,
    private _classRoomService: ClassRoomService,
    private _lessonService: LessonService,
    private _userService: UserService,
    private _dialogRef: MatDialogRef<CreateClassRoomDialogComponent>) {
    super(injector);
  }

  ngOnInit(): void {
    this.classRoom.lessons = [];
    this.classRoom.students=[];
    this._lessonService.getList().pipe(
      finalize(() => {
      })
    )
      .subscribe((result) => {
        this.lessons = result;
      });

    this._userService.getStudents().pipe(
      finalize(() => {
      })
    )
      .subscribe((result) => {
        this.students=result;
      });
  }

  save(): void {
    this.saving = true;

    this._classRoomService
      .create(this.classRoom)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.close(true);
      });
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }

  addLessonToClassRoom(): void {
    var exist = this.classRoom.lessons.find(x => x.id == this.selectedLesson.id);
    if (!exist) {
      this.classRoom.lessons.push(this.selectedLesson);
    }
  }

  deleteLessonFromClassRoom(lesson: LessonFullOutPut): void {
    const index: number = this.classRoom.lessons.indexOf(lesson);
    if (index !== -1) {
      this.classRoom.lessons.splice(index, 1);
    }
  }


  addStudentToClassRoom(): void {
    var exist = this.classRoom.students.find(x => x.id == this.selectedStudent.id);
    if (!exist) {
      this.classRoom.students.push(this.selectedStudent);
    }
  }

  deleteStudentFromClassRoom(student: UserPartOutPut): void {
    const index: number = this.classRoom.students.indexOf(student);
    if (index !== -1) {
      this.classRoom.students.splice(index, 1);
    }
  }


}
