import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | undefined;
  destino: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  transferir(){
    console.log('Solicitada nova transferência');
    const valorEmitir = {valorrr: this.valor, destinoooo: this.destino};
    this.aoTransferir.emit(valorEmitir);

    this.limparCampos();

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
