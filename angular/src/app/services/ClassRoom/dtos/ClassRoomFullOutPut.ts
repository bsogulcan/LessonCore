import { UserPartOutPut } from './../../User/dtos/UserPartOutPut';
import { LessonFullOutPut } from './../../Lesson/dtos/LessonFullOutPut';
import { isObject } from 'util';

export class ClassRoomFullOutPut implements IClassRoomFullOutPut {
    id: number | undefined;
    name: string="";
    branch: string="";
    description: string;
    lessons: LessonFullOutPut[];
    students: UserPartOutPut[];

    constructor(data?: IClassRoomFullOutPut) {
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
                this.description = data.description;
                this.branch = data.branch;
                this.lessons=data.lessons;
                this.students=data.students;
            }
        }
    }

    static fromJS(data: any): IClassRoomFullOutPut {
        data = typeof data === 'object' ? data : {};
        let result = new ClassRoomFullOutPut();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["description"] = this.description;
        data["branch"] = this.branch;
        data["lessons"]=this.lessons;
        data["students"]=this.students;
        return data;
    }

    clone(): IClassRoomFullOutPut {
        const json = this.toJSON();
        let result = new ClassRoomFullOutPut();
        result.init(json);
        return result;
    }
}

export interface IClassRoomFullOutPut {
    id: number | undefined;
    name: string | undefined;
    branch: string | undefined;
    description: string | undefined;
    lessons:LessonFullOutPut[]|undefined;
    students:UserPartOutPut[]|undefined;
}
