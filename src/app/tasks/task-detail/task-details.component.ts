import { Component, Input } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';

import "rxjs/add/operator/switchMap";

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';




@Component({
	selector: 'task-detail',
	templateUrl: 'task-details.component.html'
})

export class TaskDetailComponent{
	@Input() task: Task;
	// public task: Task;

	public constructor(
		private taskService: TaskService,
		private route: ActivatedRoute
		){	}

	public ngOnInit(){
		this.route.params
			.switchMap((params: Params) => {
				return this.taskService.getTask(+params['id']);
			})
			.subscribe(task => this.task = task)
	}
}