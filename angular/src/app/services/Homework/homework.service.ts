import { UpdateHomeworkInput } from './dtos/UpdateHomeworkInput';
import { DeleteHomeworkInput } from './dtos/DeleteHomeworkInput';
import { GetHomeworkInput } from './dtos/GetHomeworkInput';
import { HomeworkFullOutPut } from './dtos/HomeworkFullOutPut';
import { CreateHomeworkInput } from './dtos/CreateHomeworkInput';
import { UtilsService } from './../common/utils.service';
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { API_BASE_URL } from '../../../shared/service-proxies/service-proxies';
import { Observable, throwError as _observableThrow, of as _observableOf } from "rxjs";
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class HomeworkService {
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

    create(body: CreateHomeworkInput | undefined): Observable<HomeworkFullOutPut> {
        let url_ = this.baseUrl + "/api/services/app/Homework/Create";
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
                    return <Observable<HomeworkFullOutPut>><any>_observableCatch(e);
                }
            } else
                return <Observable<HomeworkFullOutPut>><any>_observableThrow(response_);
        }));
    }

    protected processCreate(response: HttpResponseBase): Observable<HomeworkFullOutPut> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
        if (status === 200) {
            return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = HomeworkFullOutPut.fromJS(resultData200);
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<HomeworkFullOutPut>(<any>null);
    }



    updateFromForm(body: FormData | undefined): Observable<HomeworkFullOutPut> {
        let url_ = this.baseUrl + "/api/services/app/Homework/UpdateAsnyc";
        url_ = url_.replace(/[?&]$/, "");

        return this.http.post(url_, body).pipe(_observableMergeMap((response_: any) => {
            return this.processUpdateFromForm(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdateFromForm(<HttpResponseBase>response_);
                } catch (e) {
                    return <Observable<HomeworkFullOutPut>><any>_observableCatch(e);
                }
            } else
                return <Observable<HomeworkFullOutPut>><any>_observableThrow(response_);
        }));
    }

    protected processUpdateFromForm(response: any): Observable<HomeworkFullOutPut> {
        const status = response.success;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).result : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
        if (status === true) {
            return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = HomeworkFullOutPut.fromJS(resultData200);
                return _observableOf(result200);
            }));
        } else if (status ===false) {
            return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<HomeworkFullOutPut>(<any>null);
    }

    createFromForm(body: FormData | undefined): Observable<HomeworkFullOutPut> {
        let url_ = this.baseUrl + "/api/services/app/Homework/Create";
        url_ = url_.replace(/[?&]$/, "");

        return this.http.post(url_, body).pipe(_observableMergeMap((response_: any) => {
            return this.processCreateFromForm(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateFromForm(<HttpResponseBase>response_);
                } catch (e) {
                    return <Observable<HomeworkFullOutPut>><any>_observableCatch(e);
                }
            } else
                return <Observable<HomeworkFullOutPut>><any>_observableThrow(response_);
        }));
    }

    protected processCreateFromForm(response: any): Observable<HomeworkFullOutPut> {
        const status = response.success;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).result : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
        if (status === true) {
            return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = HomeworkFullOutPut.fromJS(resultData200);
                return _observableOf(result200);
            }));
        } else if (status ===false) {
            return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<HomeworkFullOutPut>(<any>null);
    }


    get(body: GetHomeworkInput): Observable<HomeworkFullOutPut> {
        let url_ = this.baseUrl + "/api/services/app/Homework/Get";
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
            return this.processGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGet(<any>response_);
                } catch (e) {
                    return <Observable<HomeworkFullOutPut>><any>_observableThrow(e);
                }
            } else
                return <Observable<HomeworkFullOutPut>><any>_observableThrow(response_);
        }));
    }

    protected processGet(response: HttpResponseBase): Observable<HomeworkFullOutPut> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
        if (status === 200) {
            return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = HomeworkFullOutPut.fromJS(resultData200);
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<HomeworkFullOutPut>(<any>null);
    }


    getList(): Observable<HomeworkFullOutPut[]> {

        let url_ = this.baseUrl + "/api/services/app/Homework/GetList";
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
                    return <Observable<HomeworkFullOutPut[]>><any>_observableThrow(e);
                }
            } else {
                return <Observable<HomeworkFullOutPut[]>><any>_observableThrow(response_);
            }
        }));
    }

    protected processGetList(response: HttpResponseBase): Observable<HomeworkFullOutPut[]> {
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
        return _observableOf<HomeworkFullOutPut[]>(<any>null);
    }

    delete(body: DeleteHomeworkInput): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Homework/Delete";
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

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
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

    update(body: UpdateHomeworkInput): Observable<HomeworkFullOutPut> {
        let url_ = this.baseUrl + "/api/services/app/Homework/Update";
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
            return this.processUpdate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdate(<any>response_);
                } catch (e) {
                    return <Observable<HomeworkFullOutPut>><any>_observableThrow(e);
                }
            } else
                return <Observable<HomeworkFullOutPut>><any>_observableThrow(response_);
        }));
    }

    protected processUpdate(response: HttpResponseBase): Observable<HomeworkFullOutPut> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
        if (status === 200) {
            return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = HomeworkFullOutPut.fromJS(resultData200);
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return this.utilsService.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return this.utilsService.throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<HomeworkFullOutPut>(<any>null);
    }

    upload(): Observable<void> {
        let url_ = "http://localhost:21021/api/Upload/Index";
        // url_ = url_.replace(/[?&]$/, "");

        let options_: any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processUpload(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpload(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processUpload(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
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

}


