import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  completeTask(task){
    console.log(task);

    task.completed = true;
  }

}
