import { Component, OnInit } from '@angular/core';
import { MsgFormComponent } from './msg-form/msg-form.component';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  directives: [ MsgFormComponent ]
})
export class ContactComponent implements OnInit {
	
  constructor() {}

  ngOnInit() {
  }

}
