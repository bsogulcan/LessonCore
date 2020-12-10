import { HomeworkFullOutPut } from './../../Homework/dtos/HomeworkFullOutPut';
export class CreateFileInput implements ICreateFileInput{
    files: File[];
    homework: HomeworkFullOutPut;
}

export interface ICreateFileInput{
    files:File[]|undefined;
    homework:HomeworkFullOutPut|undefined;
}
