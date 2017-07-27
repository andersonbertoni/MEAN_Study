import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './tasknew.component.html',
  styleUrls: ['./tasknew.component.css']
})
export class TasknewComponent implements OnInit {
  task;


  constructor(public taskService: TaskService) { 
    this.task = {title:"", completed:false};
  }

  ngOnInit() {
  }

  onSubmit(){
    this.taskService.addTask(this.task);
    this.task = {title:"", completed: false};
  }

}
