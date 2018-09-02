import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  task: Task;

  constructor(public taskService: TaskService, public router: Router) {
  }

  ngOnInit() {
    this.task = new Task("New Task", "Fill me out");
  }

  save() {
    this.taskService.addTask(this.task);
    this.router.navigate(['/home']);
  }

  cancel() {
    this.router.navigate(['/home']);
  }

}
