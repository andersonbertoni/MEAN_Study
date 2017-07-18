import { Component } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
    selector: 'tasks',
    providers: [TaskService],
    templateUrl: 'tasks.component.html',
    styles: [".red { color: red}", ".blue { color: blue }"]
})

export class TasksComponent {
    constructor(public taskService: TaskService) { }

}