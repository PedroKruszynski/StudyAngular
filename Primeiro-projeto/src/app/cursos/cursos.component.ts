import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = [
                      'Java', 
                      'React',
                      'JavaScript',
                      'Node',
                      'Php',
                      'Ruby'
                    ]

  constructor() { 

    this.nomePortal = "http://Deveria_ser_um_link_dinamico_mas_ta_ok.jazon";

  }

  ngOnInit(): void {
  }

}
