import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from '../todo.service';
import {todoItem} from '../Models/TodoItem';
import {User} from "../Models/user";


@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  @Input()
  selectedTodo: todoItem =new todoItem();
  todoItem: todoItem[];

  public user:User = new User() ;

 constructor(private TodoService: TodoService) {
    this.selectedTodo.name="Halo";
    this.selectedTodo.importance= 3;
    this.selectedTodo.dueDate = new Date(Date.now());
    console.log("Hallo");


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
   console.log(this.user);
    console.log(this.user.id);
    this.TodoService.getAllofUser(this.user.id).subscribe((todos) =>  {
      this.todoItem = todos;
       });
       console.log(this.todoItem);
  }



  ngOnInit() {

   var varuser= JSON.parse(localStorage.getItem("user"));
   var useriD = varuser.id;

   console.log(useriD);
    this.user = varuser;
    console.log(this.user)
    this.getTodos();
  }

}
