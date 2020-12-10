export class DeleteLessonInput implements IDeleteLessonInput {
    id: number;

    constructor(data?:IDeleteLessonInput){}
}


export interface IDeleteLessonInput{
    id:number|undefined;
}
