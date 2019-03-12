import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from '../todo.service';
import {todoItem} from '../Models/TodoItem';


@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  @Input()
  selectedTodo: todoItem =new todoItem();
  todoItem: todoItem[];


 constructor(private TodoService: TodoService) {
    this.selectedTodo.name="Halo";
    this.selectedTodo.importance= 3;
    this.selectedTodo.dueDate = new Date(Date.now());
    console.log("Hallo");
    this.getTodos();

  }

  onSelect(todo: todoItem): void {
    console.log("Select")
    this.selectedTodo = todo;
    console.log(this.selectedTodo);
  }

  deletTodo(id:number){
    console.log("delete");
    console.log(id);
    this.TodoService.deletTodo(id).subscribe((todos:todoItem[]) =>  {
      this.todoItem = todos;
       });


  }


  getTodos(){
    this.TodoService.getAll().subscribe((todos) =>  {
      this.todoItem = todos;
       });
       console.log(this.todoItem);
  }



  ngOnInit() {
  }

}
