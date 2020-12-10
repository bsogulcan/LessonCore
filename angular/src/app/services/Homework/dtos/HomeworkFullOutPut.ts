import { FileFullOutPut } from './../../File/dtos/FileFullOutPut';
import { LessonFullOutPut } from './../../Lesson/dtos/LessonFullOutPut';
import { ClassRoomFullOutPut } from './../../ClassRoom/dtos/ClassRoomFullOutPut';
import { UserPartOutPut } from './../../User/dtos/UserPartOutPut';
import { isObject } from 'util';
export class HomeworkFullOutPut implements IHomeworkFullOutPut{
    id: number;
    summary: string="";
    description: string="";
    teacher: UserPartOutPut=new UserPartOutPut();
    classRoom:ClassRoomFullOutPut=new ClassRoomFullOutPut();
    lesson: LessonFullOutPut=new LessonFullOutPut();
    files: FileFullOutPut[];

    constructor(data?: IHomeworkFullOutPut) {
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
                this.summary = data.summary;
                this.description=data.description;
                this.teacher=data.teacher;
                this.lesson=data.lesson;
                this.classRoom=data.classRoom;
                this.files=data.files;
            }
        }
    }

    static fromJS(data: any): IHomeworkFullOutPut {
        data = typeof data === 'object' ? data : {};
        let result = new HomeworkFullOutPut();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["summary"] = this.summary;
        data["description"] = this.description;
        data["teacher"] = this.teacher;
        data["classRoom"] = this.classRoom;
        data["lesson"] = this.lesson;
        data["files"] = this.files;
        return data;
    }

    clone(): IHomeworkFullOutPut {
        const json = this.toJSON();
        let result = new HomeworkFullOutPut();
        result.init(json);
        return result;
    }
}

export interface IHomeworkFullOutPut{
    id:number|undefined;
    summary:string|undefined;
    description:string|undefined;
    teacher: UserPartOutPut|undefined;
    classRoom:ClassRoomFullOutPut|undefined;
    lesson:LessonFullOutPut|undefined;
    files:FileFullOutPut[]|undefined;
}
