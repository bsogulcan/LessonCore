import { UserPartOutPut } from './../../User/dtos/UserPartOutPut';
import { isObject } from "util";

export class LessonFullOutPut implements ILessonFullOutPut {
    id: number;
    name: string;
    teachers:UserPartOutPut[];
    constructor(data?: ILessonFullOutPut) {
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
                this.teachers=data.teachers
            }
        }
    }

    static fromJS(data: any): ILessonFullOutPut {
        data = typeof data === 'object' ? data : {};
        let result = new LessonFullOutPut();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data;
    }

    clone(): ILessonFullOutPut {
        const json = this.toJSON();
        let result = new LessonFullOutPut();
        result.init(json);
        return result;
    }

}

export interface ILessonFullOutPut {
    id: number | undefined;
    name: string | undefined;
    teachers:UserPartOutPut[]|undefined;
}
