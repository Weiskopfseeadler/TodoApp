import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {UserService} from "../user.service";
import {User} from "../Models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user:User;

  constructor(private UserService : UserService) { }

  ngOnInit() {
  }

  check(){
    this.user.password=null;
      this.UserService.check(this.user).subscribe((user)=> console.log(user));

  }

}
