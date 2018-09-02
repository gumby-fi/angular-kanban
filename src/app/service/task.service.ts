import { Injectable } from '@angular/core';
import { Task } from '../task/task';
import { TaskStatus } from '../task/task-status.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TaskService {

  public tasks: BehaviorSubject<Task[]> = new BehaviorSubject([]);

  constructor() {
    this.tasks.next([
      new Task('task 1', 'Spare ribs jowl bacon, shank short loin strip steak capicola tenderloin biltong pork andouille.T - bone hamburger leberkas, venison shank pork tail tri - tip.'),
      new Task('task 2', 'Corned beef tail sirloin pastrami, hamburger leberkas jerky pork loin bresaola. Venison salami shank chuck turkey. Cupim kevin ground round, ham hock fatback jowl doner brisket short ribs leberkas ham ribeye short loin tenderloin alcatra.'),
      new Task('task 3', 'Venison tail meatloaf meatball. Pork picanha ham biltong andouille, short ribs tenderloin. Spare ribs brisket burgdoggen pork belly. Venison filet mignon boudin tongue shank chuck pig ham swine beef sirloin flank shoulder. Chuck short loin swine filet mignon, capicola cow kielbasa leberkas biltong turkey porchetta alcatra.', TaskStatus.IN_PROGRESS),
      new Task('task 4', 'Beef ribs porchetta pork chop landjaeger boudin pork brisket tri-tip spare ribs turducken tail strip steak. Beef ribs pork loin tongue short loin. Ribeye burgdoggen ball tip chuck, meatloaf shoulder flank beef tenderloin venison pancetta pig spare ribs. Doner short loin hamburger chuck bresaola meatball. Venison t-bone kevin, pork jowl corned beef sirloin cupim.', TaskStatus.DONE),
      new Task('task 5', 'Tongue turkey burgdoggen, pastrami rump corned beef beef ribs strip steak spare ribs. Pork belly tail prosciutto filet mignon short loin beef. Pork belly pork loin drumstick flank fatback, ground round leberkas jerky', TaskStatus.DONE),
      new Task('task 6', ' Leberkas ham hock buffalo pastrami pork chop, kevin pork belly ham. Strip steak ground round tri-tip salami frankfurter, corned beef boudin turducken tail short ribs fatback flank sirloin. Landjaeger swine cupim strip steak chuck porchetta.', TaskStatus.DONE)
    ]);
  }

  getTasks$(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  addTask(task: Task) {
    this.tasks.next([...this.tasks.getValue(), task]);
  }

  deleteTask(task: Task) {
    this.tasks.next(
      this.tasks.getValue()
        .filter(t => t.id !== task.id));
  }
}
