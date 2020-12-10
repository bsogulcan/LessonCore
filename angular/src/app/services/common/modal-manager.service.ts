import { GetHomeworkInput } from './../Homework/dtos/GetHomeworkInput';
import { EditHomeworkDialogComponent } from './../../Domain/Homework/edit-homework/edit-homework/edit-homework.component';
import { CreateHomeworkDialogComponent } from './../../Domain/Homework/create-homework/create-homework/create-homework.component';
import { EditLessonComponent } from './../../Domain/Lessons/edit-lesson/edit-lesson/edit-lesson.component';
import { GetLessonInput } from './../Lesson/dtos/GetLessonInput';
import { CreateLessonDialogComponent } from './../../Domain/Lessons/create-lesson/create-lesson/create-lesson.component';
import { GetClassRoomInput } from './../ClassRoom/dtos/GetClassRoomInput';
import { EditClassroomDialogComponent } from './../../Domain/ClassRoom/edit-classroom/edit-classroom/edit-classroom.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { time } from 'console';
import { CreateClassRoomDialogComponent } from './../../Domain/ClassRoom/create-classroom/create-classroom/create-classroom.component';

@Injectable({
  providedIn: 'root'
})
export class ModalManagerService {

  constructor(private _dialog: MatDialog) { }

  openCreateClassRoomDialog(parameters?: any): any {
    let createClassRoomDialog;
    createClassRoomDialog = this._dialog.open(CreateClassRoomDialogComponent, {
      width: '600px',
      height: '550px',
      data: parameters
    });

    return createClassRoomDialog;
  }

  openUpdateClassRoomDialog(id?: number): any {
    let updateClassRoomDialog;
    let getClassRoomInput = new GetClassRoomInput();
    getClassRoomInput.id = id;

    updateClassRoomDialog = this._dialog.open(EditClassroomDialogComponent, {
      width: '600px',
      height: '550px',
      data: getClassRoomInput
    });

    return updateClassRoomDialog;
  }

  openCreateLessonDialog(parameters?: any): any {
    let createLessonDialog;
    createLessonDialog = this._dialog.open(CreateLessonDialogComponent, {
      width: '600px',
      height: '550px',
      data: parameters
    });

    return createLessonDialog;
  }

  openEditLessonDialog(id?: number): any {
    let updateLessonDialog;
    let getLessonInput = new GetLessonInput();
    getLessonInput.id = id;

    updateLessonDialog = this._dialog.open(EditLessonComponent, {
      width: '600px',
      height: '550px',
      data: getLessonInput
    });

    return updateLessonDialog;
  }

  openCreateHomeworkDialog(parameters?: any): any {
    let createHomeworkDialog;
    createHomeworkDialog = this._dialog.open(CreateHomeworkDialogComponent, {
      width: '600px',
      height: '600px',
      data: parameters
    });

    return createHomeworkDialog;
  }

  openEditHomeworkDialog(id?: number): any {
    let updateHomeworkDialog;
    let getHomeworkInput = new GetHomeworkInput();
    getHomeworkInput.id = id;

    updateHomeworkDialog = this._dialog.open(EditHomeworkDialogComponent, {
      width: '600px',
      height: '600px',
      data: getHomeworkInput
    });

    return updateHomeworkDialog;
  }

}
