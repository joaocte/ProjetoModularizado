import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { Produto } from '../models/produto';
import { Observable, fromEvent } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProdutoCountComponent } from '../produto-count/produto-count.component';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  produtos: Produto[]

  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];

    console.log(this.route.snapshot.data['teste']);
  }
  
  ngAfterViewInit(): void {
    console.log('Objeto do Contador: ', this.contador.produtos);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement,'click');
    clickTexto.subscribe(() =>{
      alert('clicou no texto!');
      return;
    });
  }

  mudarStatus(event: Produto){
    event.ativo = !event.ativo;
  }
}
