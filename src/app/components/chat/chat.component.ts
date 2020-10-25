import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje:string = "";
  elemento: any;

  constructor( public chatService: ChatService) { 
    this.chatService.cargarMensajes().
    subscribe( 
        () => {
            this.elemento.scrollTop = this.elemento.scrollHeight;
        } 
    );
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje(){
    if( this.mensaje.length === 0 ){
      return;
    }else {
      this.chatService.agregarMensaje( this.mensaje )
      .then( 
          ()=>{
            console.log('Mensaje enviado');
            this.mensaje = "";
          }
      )
      .catch(
          (err)=>{
            console.log('Error al enviar', err);
          }
      );
    }
  }

}
