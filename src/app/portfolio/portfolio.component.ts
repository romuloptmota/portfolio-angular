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

  // exibir carrosel oculto com imagens pelo display
  alterarDisplay: any  = {};

  // funçao de ativar o carroucel oculto pelo display
  abrirCarousel():void {
    this.alterarDisplay = {display:'flex',};
  }

  // função de fechar carousel
  fecharCarousel(): void {
    this.alterarDisplay = {display:'none'}
  }

}

