import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Gerenciador de Tarefas';
  user = 'Rafael';

  task: Task = new Task(20, 'Enviar orçamento!');
}

export class Task{
	public id: number;
	public title: string;

	constructor(id: number, title: string){
		this.id = id;
		this.title = title;
	}
}

