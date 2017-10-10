import { Component, Input } from '@angular/core'

import { Task } from '../shared/task.model';


@Component({
	selector: 'task-detail',
	templateUrl: 'task-details.component.html'
})

export class TaskDetailComponent{
	@Input() task: Task;
	// public task: Task;

	public constructor(){
	}
}