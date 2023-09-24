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
      "assets/imagem/logo-habilidades/typescript.png",
      "assets/imagem/logo-habilidades/git.png",
      "assets/imagem/logo-habilidades/github.png",
      "assets/imagem/logo-habilidades/intellj.png",
    ],
  },
  {
    id: 2,
    desenvolvimento: "Back-End",
    descricao: "Projeto desenvolvido durante meus estudos de Django e suas tecnologias.",
    link1: "https://github.com/romuloptmota/Site-Fusion",
    link2: " ",
    imagemProjeto: [
      "assets/imagem/projetos/projeto-fusion/principal.png",
      "assets/imagem/projetos/projeto-fusion/segunda.png",
      "assets/imagem/projetos/projeto-fusion/Terceira.png"
    ],
    imagemHabilidades:[
      "assets/imagem/logo-habilidades/python.png",
      "assets/imagem/logo-habilidades/django.png",
      "assets/imagem/logo-habilidades/pycharm.png",
      "assets/imagem/logo-habilidades/postgresql.png",
      "assets/imagem/logo-habilidades/git.png",
      "assets/imagem/logo-habilidades/github.png",
    ],
  }

];
