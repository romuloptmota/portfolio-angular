import {Component, OnInit,} from '@angular/core';
import {Habilidades, habilidades} from "./habilidades";
import {ScrollRevealService} from "../scroll-reveal.service";


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.less']
})
export class HabilidadesComponent implements OnInit{
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

  // serviço scroll-reveal
  constructor(private scrollRevealService: ScrollRevealService) {}

  ngOnInit() {
    // serviço scroll-reveal para efeito ao carregar a pagina
    this.scrollRevealService.revelarOpacidade();
    this.scrollRevealService.revelarOpacidade2();
  }
}
