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

}
