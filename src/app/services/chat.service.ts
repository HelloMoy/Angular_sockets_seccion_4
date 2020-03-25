import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public wsService: WebsocketService) { }

  sendMessage(data: string) {
    const payload = {
      from: 'Roller',
      body: data
    };

    this.wsService.emit('mensaje', payload);
  }

  getMessages(){
    return this.wsService.listen('mensaje-nuevo');
  }
}
