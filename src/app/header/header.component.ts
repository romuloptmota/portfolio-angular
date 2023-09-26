import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent{

  // variaveis para lógica de menu reponsivo
  public menuCompleto: boolean = true;
  public menuMini: boolean = false;
  public menuCompacto: boolean = false;

  // serviço scroll-reveal


  // logica do menu responsivel de acordo com tamanho de tela.
  @HostListener('window:resize')

  // Responsividade menu conforme tamanho da tela
  onsize(): void{
    if(window.innerWidth > 1050){
      this.menuCompleto = true;
      this.menuMini = false;
      this.menuCompacto = false;
    } else if(window.innerWidth > 530) {
      this.menuCompleto = false;
      this.menuMini = true;
      this.menuCompacto = false;
    } else{
      this.menuCompleto = false;
      this.menuMini = false;
      this.menuCompacto = true;
    }
  }


}
