import {Component, OnInit} from '@angular/core';
import {Portfolio, portfolio} from "./portfolio";
import {ScrollRevealService} from "../scroll-reveal.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit{

  // simulando banco de dados
  projetos: Portfolio[] = portfolio;

  // Adicione uma propriedade para rastrear o ID do projeto aberto
  projetoAbertoId: number | null = null;

  // serviço scroll-reveal
  constructor(private scrollRevealService: ScrollRevealService) {}

  // Função para abrir o carrossel com base no ID do projeto
  abrirCarousel(projeto: Portfolio): void {
    this.projetoAbertoId = projeto.id;
  }

  // Função para fechar o carrossel
  fecharCarousel(): void {
    this.projetoAbertoId = null; // Define o ID do projeto aberto como null para fechar o carrossel
  }

  ngOnInit() {

  // serviço scroll-reveal para efeito ao carregar a pagina
    this.scrollRevealService.revelarOpacidade();
    this.scrollRevealService.revelarOpacidade2();

  }

}

