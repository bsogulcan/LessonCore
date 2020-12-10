import { UpdateHomeworkInput } from './../../../../services/Homework/dtos/UpdateHomeworkInput';
import { HomeworkFullOutPut } from './../../../../services/Homework/dtos/HomeworkFullOutPut';
import { UserService } from './../../../../services/User/user.service';
import { ClassRoomService } from './../../../../services/ClassRoom/ClassRoomService.service';
import { LessonService } from './../../../../services/Lesson/lesson.service';
import { HomeworkService } from './../../../../services/Homework/homework.service';
import { GetHomeworkInput } from './../../../../services/Homework/dtos/GetHomeworkInput';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { AppComponentBase } from '../../../../../shared/app-component-base'
import { LessonFullOutPut } from '../../../../services/Lesson/dtos/LessonFullOutPut';
import { ClassRoomFullOutPut } from '../../../../services/ClassRoom/dtos/ClassRoomFullOutPut';
import { UserPartOutPut } from '../../../../services/User/dtos/UserPartOutPut';
import { finalize } from 'rxjs/operators';
import { GetLessonInput } from '../../../../services/Lesson/dtos/GetLessonInput';
import { FileFullOutPut } from '@app/services/File/dtos/FileFullOutPut';

@Component({
  selector: 'app-edit-homework',
  templateUrl: './edit-homework.component.html',
  styleUrls: ['./edit-homework.component.scss']
})
export class EditHomeworkDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  homework: HomeworkFullOutPut = new HomeworkFullOutPut();
  files: File[] = [];

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
    private _dialogRef: MatDialogRef<EditHomeworkDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private _homework: GetHomeworkInput) {
    super(injector);
  }

  ngOnInit() {
    this._homeworkService.get(this._homework).subscribe((result: HomeworkFullOutPut) => {
      this.homework = result;

      this.selectedClassRoom=this.homework.classRoom;
      this.selectedLesson=this.homework.lesson;
      this.selectedTeacher=this.homework.teacher;

      this.lessons=this.homework.classRoom.lessons;
      this.teachers=this.selectedLesson.teachers;


    });

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
  close(result: any): void {
    this._dialogRef.close(result);
  }

  save(){
    this.saving = true;
    const formData = new FormData();

    let updateHomeworkInput: UpdateHomeworkInput = new UpdateHomeworkInput();
    updateHomeworkInput.id=this.homework.id;
    updateHomeworkInput.summary = this.homework.summary;
    updateHomeworkInput.description = this.homework.description;
    updateHomeworkInput.classRoomId = this.selectedClassRoom.id;
    updateHomeworkInput.lessonId = this.selectedLesson.id;
    updateHomeworkInput.teacherId = this.selectedTeacher.id;

    for (let file of this.files) {
      formData.append('files', file, file.name);
    }

    formData.append('id', updateHomeworkInput.id.toString());
    formData.append('summary', updateHomeworkInput.summary.toString());
    formData.append('description', updateHomeworkInput.description.toString());
    formData.append('classRoomId', updateHomeworkInput.classRoomId.toString());
    formData.append('lessonId', updateHomeworkInput.lessonId.toString());
    formData.append('lessonId', updateHomeworkInput.lessonId.toString());
    formData.append('teacherId', updateHomeworkInput.teacherId.toString());


    this._homeworkService
      .updateFromForm(formData)
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
  public uploadFile = (files) => {
    this.files = files;
    this.homework.files=[];
    for(let file of this.files){
      let homeworkFile=new FileFullOutPut();
      homeworkFile.name=file.name;
      this.homework.files.push(homeworkFile)
    }
  }
  // Mat Select Componenti için Two Binding yapılmak istediğinde
  // Form açıldığında seçili olan veriyi göstermek için compare işlemei yapılmalı
  customCompare(o1, o2) {
    return o1.id === o2.id;
  }
}
