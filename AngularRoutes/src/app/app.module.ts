import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks.component';
import { OtherComponent } from './other.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    OtherComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'tasks',        
        component: TasksComponent
      },
      {
        path: 'other',
        component: OtherComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
