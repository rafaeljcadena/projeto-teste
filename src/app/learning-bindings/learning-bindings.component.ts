import { Component } from '@angular/core';

@Component({
	selector: 'learning-bindings', 
	templateUrl: './learning-bindings.component.html'
})

export class LearningBindingsComponent {
	public mouseClickCount: number;
	public mouseOverCount: number;
	public userName: string;
	public userEmail: string;

	public constructor(){
		this.mouseClickCount = 0;
		this.mouseOverCount = 0;
		this.userName = "Rafael Cadena";
		this.userEmail = "rafaeljcadena@gmail.com";

	}

	// mouse events
	public onClick(){
		console.log('Evento onClick disparado!');
		this.mouseClickCount += 1;
	}

	public onMouseOver(){
		console.log('Evento onMouseOver disparado!');
		this.mouseOverCount += 1;
	}

	// Key Events
	public onKeyDown(event: any){
		console.log('Evento onKeyDown disparado!');
		this.userName = event.target.value;
		console.log(event);


	}

	public onKeyUp(event: any){
		console.log('Evento onKeyUp disparado!');
		this.userEmail = event.target.value;
	}
	
	public onKeyPress(){
		console.log('Evento onKeyPress disparado!');
	}

}