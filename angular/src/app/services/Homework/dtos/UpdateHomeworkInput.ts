export class UpdateHomeworkInput implements IUpdateHomeworkInput{
    id: number;
    summary: string;
    description: string;
    teacherId: number;
    classRoomId: number;
    lessonId: number;

    constructor(data?:IUpdateHomeworkInput){}
}

export interface IUpdateHomeworkInput{
    id:number|undefined;
    summary:string|undefined;
    description:string|undefined;
    teacherId:number|undefined;
    classRoomId:number|undefined;
    lessonId:number|undefined;
}
