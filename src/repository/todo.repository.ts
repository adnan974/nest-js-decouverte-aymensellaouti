import { Todo } from "src/entities/todo.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo>{

}