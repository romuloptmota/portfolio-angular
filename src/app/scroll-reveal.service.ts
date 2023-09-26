// Serviço do ScrollReveal, usado para adicionar efeitos na pagina ao carregar

import { Injectable } from '@angular/core';

declare var ScrollReveal: any;

@Injectable({
  providedIn: 'root'
})
export class ScrollRevealService {
  private sr: any;

  constructor() {
    this.sr = ScrollReveal();
  }

  revelarEsquerda() {
    this.sr.reveal('.revelarEsquerda', {
      duration: 2000,
      origin: 'left',
      distance: '50px',
      easing: 'ease-in-out',
    });
  }

  revelarDireita() {
    this.sr.reveal('.revelarDireita', {
      duration: 2000,
      origin: 'right',
      distance: '50px',
      easing: 'ease-in-out',
    });
  }

  revelarOpacidade() {
    this.sr.reveal('.revelarOpacidade', {
      duration: 1000,
      opacity: 0,
      delay: 500, // 0,5 seg.
    });
  }

    revelarOpacidade2() {
    this.sr.reveal('.revelarOpacidade2', {
      duration: 1000,
      opacity: 0,
      delay: 1000, // 1 seg.
    });
  }

}
