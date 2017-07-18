import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [
    TasksComponent
  ],  
  imports: [
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [ TasksComponent ]
})
export class TasksModule { }
