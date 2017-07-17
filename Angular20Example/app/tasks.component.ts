import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
    selector: 'tasks',
    providers: [TaskService],
    template: `
    <h4 [class.red]="toggle">This is the Tasks Component</h4>
    <h4 [ngClass]="{ red: toggle, blue: !toggle}">This is the Tasks Component</h4>
    <h4 [ngClass]="{ blue: toggle, red: !toggle}">This is the Tasks Component</h4>
    <h5 *ngIf="toggle">Hello World!</h5>
    <ul>
        <li *ngFor="let person of people">
            {{ person }}
        </li>
    </ul>
    <span>{{ num }}</span>
    <br>
    <span>{{ numArray | json }}</span>
    <br>
    <button (click)="onClick()">Click me!</button>
    <br>
    <input [(ngModel)]="sample"/>
    <span>{{ sample }}</span>
    <br>
    <br>
    <span>{{ taskService.tasks | json }}</span>
    <br><br>
    <ul>
        <li *ngFor="let task of taskService.tasks">
            {{task}}
        </li>
    </ul>
    `,
    styles: [".red { color: red}", ".blue { color: blue }"]
})

export class TasksComponent implements OnInit {
    constructor(public taskService: TaskService) { }

    sample: string = "";
    num: number = 7;
    numArray: Array<number> = [7, 12, 14];
    toggle: boolean = true;
    people: Array<string> = ["Person1", "Person2", "Person3"];

    ngOnInit() { }

    onClick() {
        alert("Button Clicked!");
    }
}