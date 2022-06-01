import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  constructor() { }


  nomeTarefa: String = '';

  listaDeTarefas: Array<String> = [];

  ngOnInit() {}

  //1 - Ter uma lista p/ armazenar as tarefas
  //2 - Ler a tarefa atual e adicionar na lista
  //3 - Limpar a tarefa a tarefa atual

  addNovaTarefa(): void{
   // alert(this.nomeTarefa);

   this.listaDeTarefas.push(this.nomeTarefa);
  this.nomeTarefa = '';
  }
}
