import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
	moduleId: 'module.id',  // This needs to be included to view relative paths.	
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css'],
  	providers: [TodoService]
 
})
export class AppComponent {
  title = 'Reminders';
}
