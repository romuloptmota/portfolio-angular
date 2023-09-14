import {Component} from '@angular/core';
import {FormacaoAcademica, formacoesAcadenica} from "./formacao";

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.less']
})
export class FormacaoComponent {

  //Para setar informação no template simulando banco de dados
  formacao: FormacaoAcademica[] = formacoesAcadenica;

}
