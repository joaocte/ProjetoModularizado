import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
})
export class ProdutoCardDetalheComponent {

  @Input()
  produto: Produto


  @Output()
  status: EventEmitter<any> = new EventEmitter();

  emitirEvento() {
    this.status.emit(this.produto);
  }
}
