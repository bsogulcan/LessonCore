import { UserService } from './../../../../services/User/user.service';
import { GetLessonInput } from './../../../../services/Lesson/dtos/GetLessonInput';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LessonService } from './../../../../services/Lesson/lesson.service';
import { LessonFullOutPut } from './../../../../services/Lesson/dtos/LessonFullOutPut';
import { AppComponentBase } from '../../../../../shared/app-component-base'
import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { finalize } from 'rxjs/operators';
import DataSource from 'devextreme/data/data_source';
import { UserPartOutPut } from '@app/services/User/dtos/UserPartOutPut';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent extends AppComponentBase implements OnInit {
  saving = false;
  lesson: LessonFullOutPut = new LessonFullOutPut();
  teachers: UserPartOutPut[] = [];
  selectedTeacher: UserPartOutPut;

  constructor(injector: Injector,
    public _lessonService: LessonService,
    private _dialogRef: MatDialogRef<EditLessonComponent>,
    private _userService: UserService,
    @Optional() @Inject(MAT_DIALOG_DATA) private _lesson: GetLessonInput) {
    super(injector);
  }


  ngOnInit() {
    this._lessonService.get(this._lesson).subscribe((result: LessonFullOutPut) => {
      this.lesson = result;
    });

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
      .update({
        id: this.lesson.id,
        name: this.lesson.name,
        teachers: this.lesson.teachers
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

  deleteTeacherFromLesson(teacher: any) {
    const index: number = this.lesson.teachers.indexOf(teacher);
    if (index !== -1) {
      this.lesson.teachers.splice(index, 1);
    }
  }

  addTeacherForLesson() {
    var exist = this.lesson.teachers.find(x => x.id == this.selectedTeacher.id);
    if(!exist){
      this.lesson.teachers.push(this.selectedTeacher);
    }
  }


}
