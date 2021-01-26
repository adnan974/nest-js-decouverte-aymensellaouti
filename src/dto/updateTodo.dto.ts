import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTodoDto{
    id:number

    @IsString()
    @IsNotEmpty()
    description:string;
}