import {Component} from '@angular/core';
import {Habilidades, habilidades} from "./habilidades";

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.less']
})
export class HabilidadesComponent{

  //Para setar informação no template simulando banco de dados
  habilidades: Habilidades[] = habilidades;


  tecnologiaAtual:string = '';

  // método informação exibida ao passar o mouse
  atualizarTecnologia(tecnologia: string) :void{
    this.tecnologiaAtual = tecnologia;
  }

  // método limpar informação sao remover o mouse
  limparTecnologia():void{
    this.tecnologiaAtual = '';
  }

}
