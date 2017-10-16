import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';


@Component({
	selector: 'tasks',
	templateUrl: './tasks.component.html',
	providers: [ TaskService ]
})

export class TasksComponent implements OnInit {
	public tasks: Array<Task>;
	public selectedTask: Task;
	// private taskService: TaskService;

	public constructor(private taskService: TaskService){
		// this.taskService = taskService;
	}

	public ngOnInit(){
		this.taskService.getTasks()
				.then((tasks) => this.tasks = tasks)
				.catch(function(error_msg){
					console.log("Erro");
					console.log(error_msg);
				})
	}

	public onSelect(task: Task): void {
		this.selectedTask = task;
	}
}