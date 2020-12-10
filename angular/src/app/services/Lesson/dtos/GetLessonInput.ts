export class GetLessonInput implements IGetLessonInput {
    id: number;
    name:undefined;
    classRoomId:number;

    constructor(data?:IGetLessonInput){}
}


export interface IGetLessonInput{
    id:number|undefined;
    name:string|undefined;
    classRoomId:number|undefined;
}
