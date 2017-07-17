"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_service_1 = require("./task.service");
var TasksComponent = (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.sample = "";
        this.num = 7;
        this.numArray = [7, 12, 14];
        this.toggle = true;
        this.people = ["Person1", "Person2", "Person3"];
    }
    TasksComponent.prototype.ngOnInit = function () { };
    TasksComponent.prototype.onClick = function () {
        alert("Button Clicked!");
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        selector: 'tasks',
        providers: [task_service_1.TaskService],
        template: "\n    <h4 [class.red]=\"toggle\">This is the Tasks Component</h4>\n    <h4 [ngClass]=\"{ red: toggle, blue: !toggle}\">This is the Tasks Component</h4>\n    <h4 [ngClass]=\"{ blue: toggle, red: !toggle}\">This is the Tasks Component</h4>\n    <h5 *ngIf=\"toggle\">Hello World!</h5>\n    <ul>\n        <li *ngFor=\"let person of people\">\n            {{ person }}\n        </li>\n    </ul>\n    <span>{{ num }}</span>\n    <br>\n    <span>{{ numArray | json }}</span>\n    <br>\n    <button (click)=\"onClick()\">Click me!</button>\n    <br>\n    <input [(ngModel)]=\"sample\"/>\n    <span>{{ sample }}</span>\n    <br>\n    <br>\n    <span>{{ taskService.tasks | json }}</span>\n    <br><br>\n    <ul>\n        <li *ngFor=\"let task of taskService.tasks\">\n            {{task}}\n        </li>\n    </ul>\n    ",
        styles: [".red { color: red}", ".blue { color: blue }"]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map