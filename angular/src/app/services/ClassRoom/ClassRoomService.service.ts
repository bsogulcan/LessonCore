import { UpdateClassRoomInput } from './dtos/UpdateClassRoomInput';
import { DeleteClassRoomInput } from './dtos/DeleteClassRoomInput';
import { GetClassRoomInput } from './dtos/GetClassRoomInput';
import { ClassRoomFullOutPut } from './dtos/ClassRoomFullOutPut';
import { CreateClassRoomInput } from './dtos/CreateClassRoomInput';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { API_BASE_URL } from '../../../shared/service-proxies/service-proxies';
import { UtilsService } from '../common/utils.service'
import { Observable, throwError as _observableThrow, of as _observableOf } from "rxjs";
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClassRoomService {

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

     create(body: CreateClassRoomInput | undefined): Observable<ClassRoomFullOutPut> {
      let url_ = this.baseUrl + "/api/services/app/ClassRoom/Create";
      url_ = url_.replace(/[?&]$/, "");

      const content_ = JSON.stringify(body);

      let options_: any = {
          body: content_,
          observe: "response",
          responseType: "blob",
          headers: new HttpHeaders({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
          })
      };

      return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
          return this.processCreate(response_);
      })).pipe(_observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
              try {
                  return this.processCreate(<any>response_);
              } catch (e) {
                  return <Observable<ClassRoomFullOutPut>><any>_observableCatch(e);
              }
          } else
              return <Observable<ClassRoomFullOutPut>><any>_observableThrow(response_);
      }));
  }

  protected processCreate(response: HttpResponseBase): Observable<ClassRoomFullOutPut> {
    const status = response.status;
    const responseBlob =
        response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
        return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ClassRoomFullOutPut.fromJS(resultData200);
            return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }));
    }
    return _observableOf<ClassRoomFullOutPut>(<any>null);
}

get(body: GetClassRoomInput): Observable<ClassRoomFullOutPut> {
  let url_ = this.baseUrl + "/api/services/app/ClassRoom/Get";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Content-Type": "application/json-patch+json",
          "Accept": "text/plain"
      })
  };

  return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processGet(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processGet(<any>response_);
          } catch (e) {
              return <Observable<ClassRoomFullOutPut>><any>_observableThrow(e);
          }
      } else
          return <Observable<ClassRoomFullOutPut>><any>_observableThrow(response_);
  }));
}

protected processGet(response: HttpResponseBase): Observable<ClassRoomFullOutPut> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
      (<any>response).error instanceof Blob ? (<any>response).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
  if (status === 200) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      let result200: any = null;
      let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      result200 = ClassRoomFullOutPut.fromJS(resultData200);
      return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf<ClassRoomFullOutPut>(<any>null);
}


getList(): Observable<ClassRoomFullOutPut[]> {

  let url_ = this.baseUrl + "/api/services/app/ClassRoom/GetList";
  url_ = url_.replace(/[?&]$/, "");
  let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Accept": "text/plain"
      })
  };

  return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
    console.log(response_);

      return this.processGetList(response_)

  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {

          try {
              return this.processGetList(<any>response_);
          } catch (e) {
              return <Observable<ClassRoomFullOutPut[]>><any>_observableThrow(e);
          }
      } else
      {
          return <Observable<ClassRoomFullOutPut[]>><any>_observableThrow(response_);
      }
  }));
}

protected processGetList(response: HttpResponseBase): Observable<ClassRoomFullOutPut[]> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
          (<any>response).error instanceof Blob ? (<any>response).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
  if (status === 200) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          let result200: any = null;
          let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
          // result200 = DepartmentFullOutPut.fromJS(resultData200);
          return _observableOf(resultData200);
      }));
  } else if (status !== 200 && status !== 204) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf<ClassRoomFullOutPut[]>(<any>null);
}

delete(body: DeleteClassRoomInput): Observable<void> {
  let url_ = this.baseUrl + "/api/services/app/ClassRoom/DeleteAsnyc";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);
  let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Content-Type": "application/json-patch+json",
          "Accept": "text/plain"
      })
  };

  return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processDelete(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processDelete(<any>response_);
          } catch (e) {
              return <Observable<void>><any>_observableThrow(e);
          }
      } else
          return <Observable<void>><any>_observableThrow(response_);
  }));
}

protected processDelete(response: HttpResponseBase): Observable<void> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
      (<any>response).error instanceof Blob ? (<any>response).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
  if (status === 200) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      return _observableOf<void>(<any>null);
      }));
  } else if (status !== 200 && status !== 204) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf<void>(<any>null);
}

update(body: UpdateClassRoomInput): Observable<ClassRoomFullOutPut> {
  let url_ = this.baseUrl + "/api/services/app/ClassRoom/Update";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Content-Type": "application/json-patch+json",
          "Accept": "text/plain"
      })
  };

  return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processUpdate(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processUpdate(<any>response_);
          } catch (e) {
              return <Observable<ClassRoomFullOutPut>><any>_observableThrow(e);
          }
      } else
          return <Observable<ClassRoomFullOutPut>><any>_observableThrow(response_);
  }));
}

protected processUpdate(response: HttpResponseBase): Observable<ClassRoomFullOutPut> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
      (<any>response).error instanceof Blob ? (<any>response).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
  if (status === 200) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      let result200: any = null;
      let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      result200 =ClassRoomFullOutPut.fromJS(resultData200);
      return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf<ClassRoomFullOutPut>(<any>null);
}



}

