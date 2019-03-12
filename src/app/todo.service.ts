import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {todoItem} from './Models/TodoItem';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll() {
    console.log("Ich lade");
    return this.httpClient.get<any>('https://localhost:5001/api/todo');
  }
  public addTodo(newtodo: todoItem )/*Observable<todoItem>*/ {
    //console.log("Ich lade");
    return this.httpClient.post('https://localhost:5001/api/todo',newtodo);
  }

  public deletTodo(id:number){
    console.log(id);
     
    console.log('https://localhost:5001/api/todo/'+id.toString());
    let path ='https://localhost:5001/api/todo/'+id;
    console.log(path);
    return this.httpClient.delete(path);
  }

  public updateTodo(id:number,todo:todoItem){
    console.log(id);     
    console.log('https://localhost:5001/api/todo/'+id.toString());
    let path ='https://localhost:5001/api/todo/'+id;
    console.log(path);
    return this.httpClient.put(path,todo);
    
  }


}




