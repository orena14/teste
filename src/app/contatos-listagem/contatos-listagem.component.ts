import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from './contato';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

contatos: Array<Contato>;

  constructor(private service: ContatoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service
        .listar()
        .subscribe(
          response => this.contatos = response
        )
  }

}
