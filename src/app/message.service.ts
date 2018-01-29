import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
// props
  messages: string[] = [];

  constructor() { }


  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }




}
