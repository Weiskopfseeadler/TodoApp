import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {UserService} from "../user.service";
import {User} from "../Models/user";
import {Router} from "@angular/router";
import {userError} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Input() user:User=new  User();

  constructor(private UserService : UserService,private  Router : Router) { }

  ngOnInit() {

  }

  check(){
    this.user.password=null;
      this.UserService.check(this.user).subscribe((user)=> {
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        this.Router.navigateByUrl("/show-todo");
      }
  );

  }

}
