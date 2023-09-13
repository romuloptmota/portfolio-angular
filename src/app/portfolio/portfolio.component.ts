import { Component } from '@angular/core';
import {Portfolio, portfolio} from "./portfolio";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent {

  projetos: Portfolio[] = portfolio;

}

