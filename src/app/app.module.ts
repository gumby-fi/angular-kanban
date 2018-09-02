import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ColumnComponent } from './column/column.component';
import { TaskComponent } from './task/task.component';
import { BoardComponent } from './board/board.component';
import { HeadingComponent } from './heading/heading.component';
import { FooterComponent } from './footer/footer.component';
import { TaskService } from './service/task.service';
import { TaskFormComponent } from './task-form/task-form.component';

const appRoutes: Routes = [
  { path: 'home', component: BoardComponent },
  { path: 'new-task', component: TaskFormComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ColumnComponent,
    TaskComponent,
    BoardComponent,
    HeadingComponent,
    FooterComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
