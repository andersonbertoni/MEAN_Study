import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TasksService {
    //tasks = ["First Task", "Second Task", "Third Task"];
    tasks;

    constructor(private _http: Http){}

    getTasks() {
        //console.log('getting tasks');
        var aPromise = this._http.get("assets/tasks.json")        
        .toPromise()

        aPromise.then(response => this.tasks = response.json().data);
    }
}