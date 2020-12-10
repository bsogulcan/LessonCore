import { UserPartOutPut } from './../../User/dtos/UserPartOutPut';
import { LessonFullOutPut } from './../../Lesson/dtos/LessonFullOutPut';
export class UpdateClassRoomInput implements IUpdateClassRoomInput {
    id: number;
    name: string;
    branch: string;
    description: string;
    lessons: LessonFullOutPut[];
    students:UserPartOutPut[];

}

export interface IUpdateClassRoomInput{
    id:number;
    name:string|undefined;
    branch:string|undefined;
    description:string|undefined;
    lessons:LessonFullOutPut[]|undefined;
    students:UserPartOutPut[]|undefined;
}
