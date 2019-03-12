import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import {FormsModule} from '@angular/forms'

import { RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TestelementComponent } from './testelement/testelement.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule

  ],
  declarations: [
    AppComponent,
    ShowTodoComponent,
    AddTodoComponent,
    TestelementComponent,
    LoginComponent,
    RegisterComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
