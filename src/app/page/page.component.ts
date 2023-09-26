import {Component, OnInit} from '@angular/core';
import {ScrollRevealService} from "../scroll-reveal.service";


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit{

  public condicaoDesenvolvedor: boolean = true;
  public condicaoFullStack: boolean = false;

  // serviço scroll-reveal
  constructor(private scrollRevealService: ScrollRevealService) {}


  ngOnInit() {

    // serviço scroll-reveal para efeito ao carregar a pagina
    this.scrollRevealService.revelarEsquerda();
    this.scrollRevealService.revelarDireita();

    // Para alteração de contendo em baixo do nome a cada 4 seg
    setInterval(() => {
      if(this.condicaoDesenvolvedor){
        this.condicaoDesenvolvedor = false;
        this.condicaoFullStack = true;

      }else{
        this.condicaoDesenvolvedor = true;
        this.condicaoFullStack = false;
      }
    }, 4000)
  }



}
