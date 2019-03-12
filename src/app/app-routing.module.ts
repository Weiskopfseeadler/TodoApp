import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowTodoComponent} from './show-todo/show-todo.component';
import {LoginComponent } from './login/login.component'
import {AddTodoComponent} from './add-todo/add-todo.component';
import {RegisterComponent} from './register/register.component'


const routes: Routes = [
  {
    path: 'show-todo',
    component: ShowTodoComponent
  },{
    path:'add-todo',
    component : AddTodoComponent
  }
  ,{
    path:'login',
    component : LoginComponent
  },{
    path:'register',
    component : RegisterComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
