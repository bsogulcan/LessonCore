import { UserService } from './../../../../services/User/user.service';
import { UserPartOutPut } from './../../../../services/User/dtos/UserPartOutPut';
import { LessonService } from './../../../../services/Lesson/lesson.service';
import { LessonFullOutPut } from './../../../../services/Lesson/dtos/LessonFullOutPut';
import { GetClassRoomInput } from './../../../../services/ClassRoom/dtos/GetClassRoomInput';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassRoomService } from './../../../../services/ClassRoom/ClassRoomService.service';
import { ClassRoomFullOutPut } from './../../../../services/ClassRoom/dtos/ClassRoomFullOutPut';
import { Component, OnInit, Injector, Optional, Inject } from '@angular/core';
import { AppComponentBase } from '../../../../../shared/app-component-base'
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.scss']
})
export class EditClassroomDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  classRoom: ClassRoomFullOutPut = new ClassRoomFullOutPut();

  lessons: LessonFullOutPut[] = [];
  selectedLesson: LessonFullOutPut;

  students: UserPartOutPut[] = [];
  selectedStudent: UserPartOutPut;

  constructor(injector: Injector,
    public _classRoomService: ClassRoomService,
    private _lessonService: LessonService,
    private _userService: UserService,
    private _dialogRef: MatDialogRef<EditClassroomDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private _classRoom: GetClassRoomInput) {
    super(injector);
  }

  ngOnInit() {
    this._classRoomService.get(this._classRoom).subscribe((result: ClassRoomFullOutPut) => {
      this.classRoom = result;
    });

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
        this.students = result;
      });

  }

  save(): void {
    this.saving = true;
    this._classRoomService
      .update({
        name: this.classRoom.name,
        id: this.classRoom.id,
        branch: this.classRoom.branch,
        description: this.classRoom.description,
        lessons: this.classRoom.lessons,
        students: this.classRoom.students
      })
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
