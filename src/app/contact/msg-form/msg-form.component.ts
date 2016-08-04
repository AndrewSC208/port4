import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// MSG class
import { MSG } from './message';

@Component({
  moduleId: module.id,
  selector: 'msg-form',
  templateUrl: 'msg-form.component.html',
  styleUrls: ['msg-form.component.css']
})
export class MsgFormComponent implements OnInit {
	// almost feel like I need to move these to the constructor a bit later. Since I am instanciating the variable with a value;
	private title:string = 'Test';
	private submitted: boolean = false;
	private subject = ['Intrested in freelance', 'Job Opportunity', 'Just to Connect', 'Other'];

  constructor() {}

  ngOnInit() {
  }

	model = new MSG(
		1,
		'Visitor',
		'youremail@email.com',
		this.subject[0],
		'Say hi!',
		'I love dogs!'		
	);

	// lifecycle hook - good way to change the state.
	onSubmit() { this.submitted = true; }

	// TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}


//model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

////////////////////////////////////////////////////////////////
/*============================================================*/
/* CLASSES FOR FORMS */
// State:	                       Class if true   Class if false
// Control has been visited:	     ng-touched	    ng-untouched
// Control's value has changed:	   ng-dirty	      ng-pristine
// Control's value is valid:	     ng-valid	      ng-invalid
