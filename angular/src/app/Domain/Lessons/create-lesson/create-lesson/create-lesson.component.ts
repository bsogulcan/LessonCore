import { UserPartOutPut } from './../../../../services/User/dtos/UserPartOutPut';
import { UserService } from './../../../../services/User/user.service';
import { CreateLessonInput } from './../../../../services/Lesson/dtos/CreateLessonInput';
import { LessonFullOutPut } from './../../../../services/Lesson/dtos/LessonFullOutPut';
import { MatDialogRef } from '@angular/material/dialog';
import { LessonService } from './../../../../services/Lesson/lesson.service';
import { AppComponentBase } from '../../../../../shared/app-component-base';
import { Component, Injector, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  lesson: CreateLessonInput = new CreateLessonInput();
  teachers: UserPartOutPut[] = [];
  selectedTeacher: UserPartOutPut;

  constructor(injector: Injector,
    public _lessonService: LessonService,
    public _userService: UserService,
    private _dialogRef: MatDialogRef<CreateLessonDialogComponent>) {
    super(injector);
  }

  ngOnInit(): void {
    this.lesson.name = "Yeni Ders";
    this.lesson.teachers = [];
    this._userService
      .getTeachers()
      .pipe(
        finalize(() => {
          return null;
        })
      )
      .subscribe((result: UserPartOutPut[]) => {
        return this.teachers = result;
      })
  }

  save(): void {
    this.saving = true;

    this._lessonService
      .create(this.lesson)
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

  addTeacherForLesson() {
    var exist = this.lesson.teachers.find(x => x.id == this.selectedTeacher.id);
    if (!exist) {
      this.lesson.teachers.push(this.selectedTeacher);
    }
  }

  deleteTeacherFromLesson(teacher: any) {
    const index: number = this.lesson.teachers.indexOf(teacher);
    if (index !== -1) {
      this.lesson.teachers.splice(index, 1);
    }
  }

}
