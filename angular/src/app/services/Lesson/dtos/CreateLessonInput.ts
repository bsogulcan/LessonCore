import { UserPartOutPut } from './../../User/dtos/UserPartOutPut';
export class CreateLessonInput implements ICreateLessonInput{
    name: string;
    teachers: UserPartOutPut[];

    constructor(data?: ICreateLessonInput){}
}

export interface ICreateLessonInput{
    name:string|undefined;
    teachers:UserPartOutPut[]|undefined;
}
