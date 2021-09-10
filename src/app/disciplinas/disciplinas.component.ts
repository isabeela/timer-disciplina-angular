import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../disciplina.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  inputValue: '';

  constructor(public disciplinaService: DisciplinaService) {
    disciplinaService.add('Desenvolvimento para Servidores II');
    disciplinaService.add('Desenvolvimento para dispositivos móveis I');
    disciplinaService.add('Projeto do trabalho de graduação em Sistemas');
    disciplinaService.add('Tópicos Especiais em Sistemas para Internet II');
  }

  handleClick() {
    this.disciplinaService.add(this.inputValue);
    this.inputValue = '';
  }

  ngOnInit() {}
}
