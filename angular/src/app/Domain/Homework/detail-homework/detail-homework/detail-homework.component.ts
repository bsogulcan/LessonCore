import { SafeResourceUrl } from '@angular/platform-browser';
import { HomeworkFullOutPut } from './../../../../services/Homework/dtos/HomeworkFullOutPut';
import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponentBase } from '../../../../../shared/app-component-base'
import { GetHomeworkInput } from '../../../../services/Homework/dtos/GetHomeworkInput';
import { HomeworkService } from '../../../../services/Homework/homework.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { DomSanitizer} from '@angular/platform-browser';
import { API_BASE_URL } from '@shared/service-proxies/service-proxies';
@Component({
  selector: 'app-detail-homework',
  templateUrl: './detail-homework.component.html',
  styleUrls: ['./detail-homework.component.scss'],
  animations: [appModuleAnimation()]
})
export class DetailHomeworkComponent extends AppComponentBase implements OnInit {
  private baseUrl: string;
  homework:HomeworkFullOutPut=new HomeworkFullOutPut();
  file:File;
  homeworkId;
  constructor(injector: Injector,
    private _homeworkService: HomeworkService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    @Optional() private _homework: GetHomeworkInput,
    @Inject(API_BASE_URL) baseUrl?: string) {
    super(injector);
    this.baseUrl = baseUrl ? baseUrl : "";
  }

  ngOnInit() {
    let getHomeworkInput:GetHomeworkInput=new GetHomeworkInput();
    this.homeworkId=this.route.snapshot.paramMap.get('id');
    getHomeworkInput.id=this.homeworkId;

    this._homeworkService.get(getHomeworkInput).subscribe((result: HomeworkFullOutPut) => {
      this.homework = result;
    });
  }

  createImagePath(filePath:string):string{
    return this.baseUrl+"/"+filePath;
  }

  onTimeUpdate(value,file){
    console.log(value.target.currentTime);
    console.log(file);
  }

  selectedFileChanged(file){
    this.file=file[0];

    console.log(this.file);
  }

  ended(){
    console.log("Video ended");
  }
}
