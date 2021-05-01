import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

constructor(private service: TransferenciaService){

}

  transferir($event: { valorrr: number | undefined; destinoooo: number | undefined; }) {
    this.service.adicionar($event);
  }
}


