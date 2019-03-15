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

  public getAllofUser(id):Observable<any> {
    console.log("Ich lade");
    return this.httpClient.get<any>('https://localhost:5001/api/todo/'+"GetTodoItemOfUser/"+id)    .pipe(
      tap(_ => console.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
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

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }





}




