export interface Portfolio {
  id: number;
  desenvolvimento: string;
  descricao: string;
  link1: string;
  link2: string;
  imagemProjeto: string[];
  imagemHabilidades: string[];
}

export const portfolio = [
  {
    id: 1,
    desenvolvimento: "Front-End",
    descricao: "Projeto desenvolvido durante o curso de Angular no programa Start by Capgemini.",
    link1: "https://github.com/romuloptmota/projeto-acessorios",
    link2: "https://romuloptmota.github.io/projeto-acessorios/",
    imagemProjeto: [
      "assets/imagem/projetos/projeto-acessorios/produtos.png",
      "assets/imagem/projetos/projeto-acessorios/contato.png",
      "assets/imagem/projetos/projeto-acessorios/carrinho.png"
    ],
    imagemHabilidades:[
      "assets/imagem/logo-habilidades/angular.png",
      "assets/imagem/logo-habilidades/html5.png",
      "assets/imagem/logo-habilidades/css3.png",
      "assets/imagem/logo-habilidades/less.png",
      "assets/imagem/logo-habilidades/javascript.png",
      "assets/imagem/logo-habilidades/typescript.png"
    ],
  }

];
