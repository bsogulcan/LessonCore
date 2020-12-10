import { TokenAuthServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { UpdateClassRoomInput } from './../../services/ClassRoom/dtos/UpdateClassRoomInput';
import { DeleteClassRoomInput } from './../../services/ClassRoom/dtos/DeleteClassRoomInput';
import { MatButtonModule } from '@angular/material/button';
import { CreateClassRoomDialogComponent } from './create-classroom/create-classroom/create-classroom.component';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalManagerService } from './../../services/common/modal-manager.service';
import { ClassRoomService } from './../../services/ClassRoom/ClassRoomService.service';
import { ClassRoomFullOutPut } from './../../services/ClassRoom/dtos/ClassRoomFullOutPut';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';
import DataSource from "devextreme/data/data_source";
import CustomStore from 'devextreme/data/custom_store';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
  animations: [appModuleAnimation()]
})

export class ClassroomComponent extends AppComponentBase implements OnInit {
  classRoom: ClassRoomFullOutPut[] = [];
  dataSource: any = {};

  constructor(injector: Injector,
    private _classRoomService: ClassRoomService,
    private _dialog: MatDialog,
    private _modelManagerService: ModalManagerService,
    @Inject(HttpClient) httpClient: HttpClient) {
    super(injector);
  }

  ngOnInit() {
    this.dataSource = this.createDxDataSource();
  }

  createClassRoom(): void {
    this._modelManagerService.openCreateClassRoomDialog().afterClosed().subscribe(result => {
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
            this._classRoomService
              .getList()
              .pipe(
                finalize(() => {
                  reject();
                  //finishedCallback();
                })
              )
              .subscribe((result: ClassRoomFullOutPut[]) => {
                this.classRoom = result;
                resolve(this.classRoom);
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

  deleteClassRoom(classRoom: ClassRoomFullOutPut) {
    abp.message.confirm(
      this.l('ClassRoomDeleteWarningMessage', classRoom.name + " " + classRoom.branch),
      this.l("AreYouSureWarningMessage"),
      (result: boolean) => {
        if (result) {
          this._classRoomService
            .delete(classRoom)
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

  editClassRoom(id: number) {
    console.log(id);
    this._modelManagerService.openUpdateClassRoomDialog(id).afterClosed().subscribe(result => {
      if (result) {
        this.refreshDataGrid();
      }
    })
  }


}
