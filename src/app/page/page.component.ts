import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit{

  public condicaoDesenvolvedor: boolean = true;
  public condicaoFullStack: boolean = false;


  ngOnInit() {
    setInterval(() => {
      if(this.condicaoDesenvolvedor){
        this.condicaoDesenvolvedor = false;
        this.condicaoFullStack = true;

      }else{
        this.condicaoDesenvolvedor = true;
        this.condicaoFullStack = false;
      }
    }, 5000)
  }

}
