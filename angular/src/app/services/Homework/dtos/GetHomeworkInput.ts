export class GetHomeworkInput implements IGetHomeworkInput{
    id: number;
    constructor(data?:IGetHomeworkInput){}
}

export interface IGetHomeworkInput{
    id:number|undefined;
}
