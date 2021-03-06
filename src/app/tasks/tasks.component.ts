import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';


@Component({
	selector: 'tasks',
	templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {
	public tasks: Array<Task>;
	public selectedTask: Task;
	//private taskService: TaskService;

	public constructor(public taskService: TaskService){
		
	}


	public ngOnInit(){
		//this.taskService = new TaskService();
		this.taskService.getTasks().then(tasks => this.tasks = tasks);
	}

	public onSelect(task: Task): void {
		this.selectedTask = task;
	}
}



