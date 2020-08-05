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

  getValor() {

    return 1;

  }

  getCurtirCurso() {

    return true;

  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
