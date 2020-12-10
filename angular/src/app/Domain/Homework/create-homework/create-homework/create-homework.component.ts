import { CreateFileInput } from './../../../../services/File/dtos/CreateFileInput';
import { CreateHomeworkInput } from './../../../../services/Homework/dtos/CreateHomeworkInput';
import { UserPartOutPut } from './../../../../services/User/dtos/UserPartOutPut';
import { ClassRoomFullOutPut } from './../../../../services/ClassRoom/dtos/ClassRoomFullOutPut';
import { LessonFullOutPut } from './../../../../services/Lesson/dtos/LessonFullOutPut';
import { HomeworkFullOutPut } from './../../../../services/Homework/dtos/HomeworkFullOutPut';
import { ClassRoomService } from './../../../../services/ClassRoom/ClassRoomService.service';
import { LessonService } from './../../../../services/Lesson/lesson.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from './../../../../services/User/user.service';
import { HomeworkService } from './../../../../services/Homework/homework.service';
import { AppComponentBase } from '../../../../../shared/app-component-base';
import { Component, Injector, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { GetLessonInput } from '@app/services/Lesson/dtos/GetLessonInput';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { debug } from 'console';
import { create } from 'domain';
@Component({
  selector: 'app-create-homework',
  templateUrl: './create-homework.component.html',
  styleUrls: ['./create-homework.component.scss']
})
export class CreateHomeworkDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  files: File[] = [];

  homework: HomeworkFullOutPut = new HomeworkFullOutPut();
  lessons: LessonFullOutPut[];
  classRooms: ClassRoomFullOutPut[];
  teachers: UserPartOutPut[];

  selectedLesson: LessonFullOutPut;
  selectedClassRoom: ClassRoomFullOutPut;
  selectedTeacher: UserPartOutPut;

  constructor(injector: Injector,
    private _homeworkService: HomeworkService,
    private _lessonService: LessonService,
    private _classroomService: ClassRoomService,
    private _userService: UserService,
    private _dialogRef: MatDialogRef<CreateHomeworkDialogComponent>,
    private http: HttpClient) {
    super(injector);
  }

  ngOnInit() {
    this.lessons = [];
    this.classRooms = [];
    this.teachers = [];

    this._userService
      .getTeachers()
      .pipe(
        finalize(() => {
          return null;
        })
      )
      .subscribe((result: UserPartOutPut[]) => {
        return this.teachers = result;
      });

    this._lessonService
      .getList()
      .pipe(
        finalize(() => {
          return null;
        })
      )
      .subscribe((result: LessonFullOutPut[]) => {
        return this.lessons = result;
      });

    this._classroomService
      .getList()
      .pipe(
        finalize(() => {
          return null;
        })
      )
      .subscribe((result: ClassRoomFullOutPut[]) => {
        return this.classRooms = result;
      });
  }

  save(): void {
    this.saving = true;
    const formData = new FormData();

    let createHomeworkInput: CreateHomeworkInput = new CreateHomeworkInput();
    createHomeworkInput.summary = this.homework.summary;
    createHomeworkInput.description = this.homework.description;
    createHomeworkInput.classRoomId = this.selectedClassRoom.id;
    createHomeworkInput.lessonId = this.selectedLesson.id;
    createHomeworkInput.teacherId = this.selectedTeacher.id;
    // createHomeworkInput.files = formData;

    for (let file of this.files) {
      formData.append('files', file, file.name);
    }

    formData.append('summary', createHomeworkInput.summary.toString());
    formData.append('description', createHomeworkInput.description.toString());
    formData.append('classRoomId', createHomeworkInput.classRoomId.toString());
    formData.append('lessonId', createHomeworkInput.lessonId.toString());
    formData.append('lessonId', createHomeworkInput.lessonId.toString());
    formData.append('teacherId', createHomeworkInput.teacherId.toString());


    this._homeworkService
      .createFromForm(formData)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((homework) => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.close(true);
      });
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }

  selectedClassRoomChanged() {
    console.log("Success");
    let lessonGetInput: GetLessonInput = new GetLessonInput();

    lessonGetInput.classRoomId = this.selectedClassRoom.id;

    this._lessonService
      .getLessonsByClassRoomId(lessonGetInput)
      .pipe(
        finalize(() => {
          return null;
        })
      )
      .subscribe((result: LessonFullOutPut[]) => {
        return this.lessons = result;
      });
  }

  selectedLessonChanged() {
    let getLessonInput: GetLessonInput = new GetLessonInput();
    getLessonInput.id = this.selectedLesson.id;

    this._lessonService
      .get(getLessonInput)
      .pipe(
        finalize(() => {
          return null;
        })
      )
      .subscribe((result: LessonFullOutPut) => {
        return this.teachers = result.teachers;
      });


  }

  public uploadFile = (files) => {
    this.files = files;
    console.log(this.files);
  }

}
