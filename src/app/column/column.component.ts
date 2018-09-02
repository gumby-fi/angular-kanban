import { Component, OnInit, Input, Inject } from '@angular/core';
import { TaskStatus } from '../task/task-status.enum';
import { Task } from '../task/task';
import { TaskService } from '../service/task.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() taskStatus: TaskStatus;

  tasks: Task[];

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks$()
      .pipe(map(tasks => tasks.filter(task => task.status === this.taskStatus)))
      .subscribe((tasks: Task[]) => this.tasks = tasks);
  }
}
