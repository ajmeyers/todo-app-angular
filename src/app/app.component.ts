import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoArray = [];
  /* add item */
  addItem(value) {
    if (this.todoArray.includes(value)) {
        alert('Todo already exists...');
        return;
    }
    if (value !== '') {
        this.todoArray.push(value);
        console.log(this.todoArray);
    } else {
        alert('No todo found...');
    }
  }
  /* delete item */
  deleteItem(todo) {
    for (let i = 0; i < this.todoArray.length; i++) {
      if (todo === this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log(this.todoArray);
      }
    }
  }
}
