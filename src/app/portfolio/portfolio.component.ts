import { Component } from '@angular/core';
import {Portfolio, portfolio} from "./portfolio";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent {

  // simulando banco de dados
  projetos: Portfolio[] = portfolio;

  // Adicione uma propriedade para rastrear o ID do projeto aberto
  projetoAbertoId: number | null = null;

  // Função para abrir o carrossel com base no ID do projeto
  abrirCarousel(projeto: Portfolio): void {
    this.projetoAbertoId = projeto.id;
  }

  // Função para fechar o carrossel
  fecharCarousel(): void {
    this.projetoAbertoId = null; // Define o ID do projeto aberto como null para fechar o carrossel
  }

}

