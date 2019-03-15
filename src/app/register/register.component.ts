import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from "../Models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() user:User=new  User();

  constructor(private UserService: UserService,private  Router : Router) { }

  ngOnInit() {
  }

  add(){
    this.UserService.addUser(this.user).subscribe((user)=>
    {
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      this.Router.navigateByUrl("/show-todo");
    });
  }

}
