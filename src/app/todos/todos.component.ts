import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title:string = 'Reminders';
	todos; // NB this must match the below
	text; // This must match the below

  public displayDate;

  constructor( private _todoService: TodoService) {

    setInterval(() => {
      return this.displayDate = new Date();
    },1000)

  }




  ngOnInit() {
  	this.todos = this._todoService.getTodos()

// this.todos = [
//   		{
//   			text: ' Pick up the girls'
//   		},
//   		{
//   			text: ' Make Biltong'
//   		},
//   		{
//   			text: ' Meeting in Guildford'
//   		},
//   		{
//   			text: ' Catch the mouse.'
//   		}
//   	];
 }

  addTodo(){

  	var newTodo = {
  		text: this.text
  	}
   this.todos.push(newTodo);
   this._todoService.addTodo(newTodo);
   this.text =''; /* This clears the input after submitting */
  }



  deleteTodo(todoText){
  	for(var i = 0; i < this.todos.length; i++){
  		if(this.todos[i].text == todoText){
  			this.todos.splice(i,1);
  		}
  	}

  	this._todoService.deleteTodo(todoText);
  }
}
