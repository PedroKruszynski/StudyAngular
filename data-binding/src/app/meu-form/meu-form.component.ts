import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.sass']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'abc';

  pessoa: any = {

    nome: 'nome',
    idade: 20

  }

  constructor() { }

  ngOnInit(): void {
  }

}
