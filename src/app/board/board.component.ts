import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { TaskStatus } from '../task/task-status.enum';
import { isNumber } from 'util';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  columns: TaskStatus[];

  constructor() {
    this.columns = Object.keys(TaskStatus)
      .map(key => TaskStatus[key]);
  }

}
