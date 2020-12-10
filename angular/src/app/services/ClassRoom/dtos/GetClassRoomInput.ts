import { extend } from "lodash-es";

export class GetClassRoomInput implements IGetClassRoomInput{
    id: number;

}

export interface IGetClassRoomInput{
    id:number;
}
