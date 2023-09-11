import {Component} from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.less']
})
export class HabilidadesComponent{

  public tecnologia: string = '';

  // pegando informação desejada do template e exibindo na h3
  aoPassarMouse(apresentado:string):void{
    this.tecnologia = apresentado;
  }

  // apagar mensagem após remover o mouse
  ocultarMensagem():void{
    this.tecnologia = '';
  }
}
