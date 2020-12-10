import { UserPartOutPut } from './dtos/UserPartOutPut';
import { UtilsService } from './../common/utils.service';
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { API_BASE_URL } from '../../../shared/service-proxies/service-proxies';
import { Observable } from 'rxjs/internal/Observable';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from "rxjs/operators";
import { throwError as _observableThrow, of as _observableOf } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private utilsService: UtilsService;
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver:
    | ((key: string, value: any) => any)
    | undefined = undefined;


    constructor(@Inject(HttpClient) http: HttpClient,
    utilsService: UtilsService,
    @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.utilsService = utilsService;
    this.http = http;
    this.baseUrl = baseUrl ? baseUrl : "";
  }

  getTeachers(): Observable<UserPartOutPut[]> {
    let url_ = this.baseUrl + "/api/services/app/User/GetTeachers";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetTeachers(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetTeachers(<any>response_);
        } catch (e) {
          return <Observable<UserPartOutPut[]>><any>_observableThrow(e);
        }
      } else
        return <Observable<UserPartOutPut[]>><any>_observableThrow(response_);
    }));
  }

  protected processGetTeachers(response: HttpResponseBase): Observable<UserPartOutPut[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        // result200 = UserPartOutPut.fromJS(resultData200);
        return _observableOf(resultData200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<UserPartOutPut[]>(<any>null);
  }

  getStudents(): Observable<UserPartOutPut[]> {
    let url_ = this.baseUrl + "/api/services/app/User/GetStudents";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetStudents(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetStudents(<any>response_);
        } catch (e) {
          return <Observable<UserPartOutPut[]>><any>_observableThrow(e);
        }
      } else
        return <Observable<UserPartOutPut[]>><any>_observableThrow(response_);
    }));
  }

  protected processGetStudents(response: HttpResponseBase): Observable<UserPartOutPut[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        // result200 = UserPartOutPut.fromJS(resultData200);
        return _observableOf(resultData200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<UserPartOutPut[]>(<any>null);
  }




}
