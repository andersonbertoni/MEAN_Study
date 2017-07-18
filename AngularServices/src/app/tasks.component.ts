import { Component, OnInit } from '@angular/core';

import { TasksService } from './tasks.service';

@Component({
  selector: 'tasks',
  providers: [TasksService],
  templateUrl: './tasks.component.html'  
})
export class TasksComponent implements OnInit{
    constructor(public taskService: TasksService) {}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.taskService.getTasks();
    }
}
