import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://alguma_coisa_javascripto.py'

  cursoAngular: boolean = true;

  urlImage: string = 'https://picsum.photos/200/300';

  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseHouver: boolean = false;

  getValor() {

    return 1;

  }

  getCurtirCurso() {

    return true;

  }
  
  botaoClicado() {

    alert('clicou no botao');

  }

  onKeyUp(event: KeyboardEvent) {

    this.valorAtual = (<HTMLInputElement>event.target).value;

  }

  salvarValor(value) {

    this.valorSalvo = value;

  }

  onMouseHouverOut() {

    this.isMouseHouver = !this.isMouseHouver;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
