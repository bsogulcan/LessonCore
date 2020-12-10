export class DeleteHomeworkInput implements IDeleteHomeworkInput{
    id: number;
    constructor(data?:IDeleteHomeworkInput){}
}

export interface IDeleteHomeworkInput{
    id:number|undefined;
}
