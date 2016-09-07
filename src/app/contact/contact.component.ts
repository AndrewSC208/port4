import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MessageService } from './message.service';
import { Message } from './message';


@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  providers: [MessageService],
})
export class ContactComponent implements OnInit {
	messages;
	message: Message;
	postMessageRes: string;
  title:string = "The Sky is the limit, drop me a line and find out how far we can go!";
  photo:string = "https://res.cloudinary.com/drkmakxkk/image/upload/v1472441474/contacts-bg-hi_kwaril.jpg";

  constructor(private _httpMessageService: MessageService) {
  	// I think these is a better way to build another message object
    this.message = { 
      sender_name : "", 
      email: "", 
      subject: "", 
      message_body: "", 
      fun_fact: ""
    };
  }

  //** CLASS LIFECYCLE ACTIONS **//
  ngOnInit() {
  	
  }

  // I will prob want to update the form to use ngForm and ngSubmit, but for now this is good.

  //** CLASS METHODS **//
  // getMessages() {
  // 	this._httpMessageService.getMessages()
  // 		.subscribe(
  // 			data  => this.messages = data,
  // 			error => console.log("error http get service"),
  // 			()    => console.log(this.messages)
  // 		);
  // }

  postMessage() {
  	this._httpMessageService.postMessage( this.message )
  	.subscribe(
  	  // set the reg value for res:
      res   => this.postMessageRes = res,
  	  error => console.log("and error occured"),
  	  ()    =>  this.message = { 
                  sender_name : "", 
                  email: "", 
                  subject: "", 
                  message_body: "", 
                  fun_fact: ""
                }
     )
  }

}
