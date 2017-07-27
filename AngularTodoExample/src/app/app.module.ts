import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasklistComponent } from './tasklist/tasklist.component';

import { TaskService } from './task.service';
import { TasknewComponent } from './tasknew/tasknew.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasklistComponent,
    TasknewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
