import { IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto{
    
    id:number;
    
    @IsString()
    @IsNotEmpty()
    description:string;
}