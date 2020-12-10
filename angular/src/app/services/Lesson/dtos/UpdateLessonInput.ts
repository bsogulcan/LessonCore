import { UserPartOutPut } from './../../User/dtos/UserPartOutPut';
export class UpdateLessonInput implements IUpdateLessonInput{
    id: number;
    name: string;
    teachers: UserPartOutPut[];

    constructor(data?:IUpdateLessonInput){}
}

export interface IUpdateLessonInput{
    id:number|undefined;
    name:string|undefined;
    teachers:UserPartOutPut[]|undefined;
}
