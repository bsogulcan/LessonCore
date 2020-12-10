import { LessonService } from './Lesson/lesson.service';
import { ClassRoomService } from './ClassRoom/ClassRoomService.service';
import { NgModule } from '@angular/core';
import {ModalManagerService} from './common/modal-manager.service'
@NgModule({
  providers: [
    ModalManagerService,
    ClassRoomService,
    LessonService
  ]
})
export class LessonServiceModule { }
