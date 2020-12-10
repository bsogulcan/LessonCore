import { isObject } from "util";

export class UserPartOutPut implements IUserPartOutPut {
    id: number;
    userName: string;
    name: string;
    lastName: string;
    emailAddress: string;

    constructor(data?: IUserPartOutPut) {
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
                this.userName=data.userName;
                this.lastName=data.lastName;
                this.emailAddress=data.emailAddress;
            }
        }
    }

    static fromJS(data: any): IUserPartOutPut {
        data = typeof data === 'object' ? data : {};
        let result = new UserPartOutPut();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["userName"] = this.userName;
        data["lastName"] = this.lastName;
        data["emailAddress"] = this.emailAddress;
        return data;
    }

    clone(): IUserPartOutPut {
        const json = this.toJSON();
        let result = new UserPartOutPut();
        result.init(json);
        return result;
    }



}

export interface IUserPartOutPut{
    id:number|undefined;
    userName:string|undefined;
    name:string|undefined;
    lastName:string|undefined;
    emailAddress:string|undefined;
}
