import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(private CursosService: CursosService) { 

    this.nomePortal = "http://Deveria_ser_um_link_dinamico_mas_ta_ok.jazon";

    this.cursos = this.CursosService.getCursos();

  }

  ngOnInit(): void {
  }

}
