import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoArray = [];
  addTodo(value) {
    if (value !== "") {
       this.todoArray.push(value)
       console.log(this.todoArray) 
    } else {
      alert('No todo found...');
    }
  }
}
