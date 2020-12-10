import DataSource from "devextreme/data/data_source";
import { LessonFullOutPut } from './../../../services/Lesson/dtos/LessonFullOutPut';
import { LessonService } from './../../../services/Lesson/lesson.service';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalManagerService } from '@app/services/common/modal-manager.service';
import { HttpClient } from '@angular/common/http';
import { AppComponentBase } from '@shared/app-component-base';
import CustomStore from 'devextreme/data/custom_store';
import { finalize } from 'rxjs/operators';
import { appModuleAnimation } from "@shared/animations/routerTransition";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
  animations: [appModuleAnimation()]
})
export class LessonComponent extends AppComponentBase implements OnInit {
  lessons: LessonFullOutPut[] = [];
  dataSource: any = {};

  constructor(injector: Injector,
    private _lessonService: LessonService,
    private _dialog: MatDialog,
    private _modelManagerService: ModalManagerService,
    @Inject(HttpClient) httpClient: HttpClient) {
    super(injector);
  }

  ngOnInit() {
    this.dataSource = this.createDxDataSource();
  }

  createLesson() {
    this._modelManagerService.openCreateLessonDialog().afterClosed().subscribe(result => {
      if (result) {
        this.refreshDataGrid();
      }
    });
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
        location: 'before',
        template: 'formNameTemplate'
      },
      {
        location: 'after',
        template: 'refreshButtonTemplate'
      });
  }
  onOptionChanged(e) {
  }
  createDxDataSource(): DataSource {
    return new DataSource({
      store: new CustomStore({
        key: "id",
        loadMode: "raw",
        load: () => {
          return new Promise((resolve, reject) => {
            this._lessonService
              .getList()
              .pipe(
                finalize(() => {
                  reject();
                  //finishedCallback();
                })
              )
              .subscribe((result: LessonFullOutPut[]) => {
                this.lessons = result;
                resolve(this.lessons);
              });
          });
        }
      })
    });
  }

  refreshDataGrid() {
    this.dataSource.reload();
  }

  editLesson(id: number) {
    this._modelManagerService.openEditLessonDialog(id).afterClosed().subscribe(result => {
      if (result) {
        this.refreshDataGrid();
      }
    })

  }

  deleteLesson(lesson: LessonFullOutPut) {
    abp.message.confirm(
      this.l('LessonDeleteWarningMessage', lesson.name),
      this.l("AreYouSureWarningMessage"),
      (result: boolean) => {
        if (result) {
          this._lessonService
            .delete(lesson)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refreshDataGrid();
              })
            )
            .subscribe(() => { });
        }
      }
    );
  }

}
