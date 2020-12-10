import { GetHomeworkInput } from './../../../services/Homework/dtos/GetHomeworkInput';
import { HomeworkFullOutPut } from './../../../services/Homework/dtos/HomeworkFullOutPut';
import { HomeworkService } from './../../../services/Homework/homework.service';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalManagerService } from '@app/services/common/modal-manager.service';
import { HttpClient } from '@angular/common/http';
import { AppComponentBase } from '@shared/app-component-base';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { finalize } from 'rxjs/operators';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss'],
  animations: [appModuleAnimation()]
})
export class HomeworkComponent  extends AppComponentBase implements OnInit {
  homeworks:HomeworkFullOutPut[];
  dataSource: any = {};

  constructor(injector: Injector,
    private router: Router,
    private _homeworkService: HomeworkService,
    private _dialog: MatDialog,
    private _modelManagerService: ModalManagerService,
    @Inject(HttpClient) httpClient: HttpClient) {
    super(injector);
  }

  ngOnInit() {
    this.dataSource = this.createDxDataSource();
  }

  createHomeWork(): void {
    this._modelManagerService.openCreateHomeworkDialog().afterClosed().subscribe(result => {
      if (result) {
        this.refreshDataGrid();
      }
    });
  }

  refreshDataGrid() {
    this.dataSource.reload();
  }

  createDxDataSource(): DataSource {
    return new DataSource({
      store: new CustomStore({
        key: "id",
        loadMode: "raw",
        load: () => {
          return new Promise((resolve, reject) => {
            this._homeworkService
              .getList()
              .pipe(
                finalize(() => {
                  reject();
                })
              )
              .subscribe((result: HomeworkFullOutPut[]) => {
                this.homeworks = result;
                resolve(this.homeworks);
              });
          });
        }
      })
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

  deleteHomework(homework: HomeworkFullOutPut) {
    abp.message.confirm(
      this.l('HomeworkDeleteWarningMessage', homework.summary),
      this.l("AreYouSureWarningMessage"),
      (result: boolean) => {
        if (result) {
          this._homeworkService
            .delete(homework)
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

  detailHomework(homework: HomeworkFullOutPut){
    this.router.navigate(['/app/homework',homework.id]);
  }

  editHomework(id: number) {
    console.log(id);
    this._modelManagerService.openEditHomeworkDialog(id).afterClosed().subscribe(result => {
      if (result) {
        this.refreshDataGrid();
      }
    })
  }
}
