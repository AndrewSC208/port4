export class Message {
	
	constructor(
		 public sender_name  : string,
		 public email        : string,
		 public subject      : string,
		 public message_body : string,
		 public fun_fact     : string
	){ }

}

// so now we can make new MSG's like this:
// let toSendMsg = new MSG(
// 	1,
// 	'Andrew',
// 	'meiling@gmail.com',
// 	'fun things to talk about',
// 	'I want to give you a new job',
// 	03/05/2016,
// 	'This is an optional field, but we are going to use it anyways'		
// );

// // this is just an example of a Model class
// export class Hero {
//   constructor(
//     public id: number,
//     public name: string,
//     public power: string,
//     public alterEgo?: string
//   ) {  }
// }