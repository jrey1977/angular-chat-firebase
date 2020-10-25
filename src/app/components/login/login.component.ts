import { Component } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public chatService: ChatService) { }

  ingresar(proveedor:string){
      this.chatService.login(proveedor);
  }

}
