import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './Models/user';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private path = 'https://localhost:5001/api/user/';


  public getAll() {

    return this.httpClient.get<any>(this.path);
  }
  public addUser(newUser: User )/*Observable<UserItem>*/ {
    //console.log("Ich lade");
    return this.httpClient.post<any>(this.path,newUser);
  }

  public deletUser(id:number){

    return this.httpClient.delete(this.path);
  }

  public updateUser(id:number,User:User){

    return this.httpClient.put(this.path,User);

  }
  public check(User:User){

    return this.httpClient.put(this.path+"/Check",User);

  }


}
