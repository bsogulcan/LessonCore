export class CreateHomeworkInput implements ICreateHomeworkInput{
    summary: string="";
    description: string="";
    teacherId: number;
    classRoomId: number;
    lessonId: number;
    files: FormData;
    constructor(data?:ICreateHomeworkInput){}
}

export interface ICreateHomeworkInput{
    summary:string|undefined;
    description:string|undefined;
    teacherId:number|undefined;
    classRoomId:number|undefined;
    lessonId:number|undefined;
    files:FormData|undefined;
}
