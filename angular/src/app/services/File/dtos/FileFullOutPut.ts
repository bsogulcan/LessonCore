import { SafeResourceUrl } from "@angular/platform-browser";

import { isObject } from 'util';
export class FileFullOutPut implements IFileFullOutPut{
    id:number;
    name: string;
    type: string;
    size: number;
    path: string;

    constructor(data?: IFileFullOutPut) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if(isObject(data))
            {
                this.id = data.id;
                this.name = data.name;
                this.type=data.type;
                this.size=data.size;
                this.path=data.path;
            }
        }
    }

    static fromJS(data: any): IFileFullOutPut {
        data = typeof data === 'object' ? data : {};
        let result = new FileFullOutPut();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["type"] = this.type;
        data["size"] = this.size;
        data["path"] = this.path;
        return data;
    }

    clone(): IFileFullOutPut {
        const json = this.toJSON();
        let result = new FileFullOutPut();
        result.init(json);
        return result;
    }


}

export interface IFileFullOutPut{
    id:number|undefined;
    name:string|undefined;
    type:string|undefined;
    size:number|undefined;
    path:string|undefined;
}
