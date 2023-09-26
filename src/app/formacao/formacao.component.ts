import {Component, OnInit} from '@angular/core';
import {FormacaoAcademica, formacoesAcadenica} from "./formacao";
import {ScrollRevealService} from "../scroll-reveal.service";

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.less']
})
export class FormacaoComponent implements OnInit{

  //Para setar informação no template simulando banco de dados
  formacao: FormacaoAcademica[] = formacoesAcadenica;

  // serviço scroll-reveal
  constructor(private scrollRevealService: ScrollRevealService) {}

  ngOnInit(){

    // serviço scroll-reveal para efeito ao carregar a pagina
    this.scrollRevealService.revelarOpacidade();
    this.scrollRevealService.revelarOpacidade2();

  }
}
