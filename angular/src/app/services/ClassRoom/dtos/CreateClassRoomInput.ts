import { UserPartOutPut } from './../../User/dtos/UserPartOutPut';
import { LessonFullOutPut } from './../../Lesson/dtos/LessonFullOutPut';
 export class CreateClassRoomInput implements ICreateClassRoomInput{
     name: string;
     branch: string;
     description: string;
     lessons: LessonFullOutPut[];
     students:UserPartOutPut[];
     constructor(data?: ICreateClassRoomInput) { }
 }

export interface ICreateClassRoomInput {
    name: string | undefined;
    branch: string | undefined;
    description: string | undefined;
    lessons:LessonFullOutPut[]|undefined;
    students:UserPartOutPut[]|undefined;
}
