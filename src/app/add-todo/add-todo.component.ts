import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from '../todo.service';
import {todoItem} from '../Models/TodoItem';
import{ShowTodoComponent} from '../show-todo/show-todo.component';




@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {


  constructor(private TodoService: TodoService) {
    this.selectedTodo.name = "test";
   }
  @Input() selectedTodo: todoItem = new todoItem();
  @Input() showTodo:ShowTodoComponent;
  
  add(name : string , importance: number, dueDate: Date ,operator:string){
    let todo: todoItem = {    
     id:0,
     name: name,
     importance: importance,
     dueDate: dueDate,
     operator:operator     
   };
   
   this.TodoService.addTodo(todo).subscribe((newtodo:todoItem) => {
      this.showTodo.todoItem.push(newtodo);
  });
   
   
  }
  
  updateTodo(id:number,name : string , importance: number, dueDate: Date ,operator:string){
    let todo: todoItem = {    
     id:id,
     name: name,
     importance: importance,
     dueDate: dueDate,
     operator:operator     
   };
    console.log("update");
    console.log(todo);
    this.TodoService.updateTodo(id,todo).subscribe((todos:todoItem[]) =>  {
      this.showTodo.todoItem = todos;      
       });

 

  }

  ngOnInit() {
  }

}
