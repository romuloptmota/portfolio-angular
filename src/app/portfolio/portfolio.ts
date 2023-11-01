export interface Portfolio {
  id: number;
  desenvolvimento: string;
  descricao: string;
  link1: string;
  imagemProjeto: string[];
  imagemHabilidades: string[];
}

export const portfolio = [
  {
    id: 1,
    desenvolvimento: "Front-End",
    descricao: "E-commerce de peçãs para informática que foi desenvolvido durante o curso de Angular no programa Start by Capgemini.",
    link1: "https://github.com/romuloptmota/projeto-acessorios",
    imagemProjeto: [
      "./assets/imagem/projetos/projeto-acessorios/produtos.png",
      "./assets/imagem/projetos/projeto-acessorios/contato.png",
      "./assets/imagem/projetos/projeto-acessorios/carrinho.png"
    ],
    imagemHabilidades: [
      "./assets/imagem/logo-habilidades/angular.png",
      "./assets/imagem/logo-habilidades/html5.png",
      "./assets/imagem/logo-habilidades/css3.png",
      "./assets/imagem/logo-habilidades/less.png",
      "./assets/imagem/logo-habilidades/bootstrap.png",
      "./assets/imagem/logo-habilidades/javascript.png",
      "./assets/imagem/logo-habilidades/typescript.png",
      "./assets/imagem/logo-habilidades/git.png",
      "./assets/imagem/logo-habilidades/github.png",
      "./assets/imagem/logo-habilidades/intellj.png",
    ],
  },
  {
    id: 2,
    desenvolvimento: "Back-End",
    descricao: "Portfolio para empresas, onde pode apresentar seus serviços, recursos, colaboradores, etc, que foi desenvolvido durante meus estudos de Django.",
    link1: "https://github.com/romuloptmota/Site-Fusion",
    imagemProjeto: [
      "./assets/imagem/projetos/projeto-fusion/principal.png",
      "./assets/imagem/projetos/projeto-fusion/segunda.png",
      "./assets/imagem/projetos/projeto-fusion/Terceira.png"
    ],
    imagemHabilidades: [
      "./assets/imagem/logo-habilidades/python.png",
      "./assets/imagem/logo-habilidades/django.png",
      "./assets/imagem/logo-habilidades/pycharm.png",
      "./assets/imagem/logo-habilidades/postgresql.png",
      "./assets/imagem/logo-habilidades/git.png",
      "./assets/imagem/logo-habilidades/github.png",
    ],
  },
  {
    id: 3,
    desenvolvimento: "Full-Stack",
    descricao: "Sistema de locação de imóveis, onde pode se cadastrar clientes, imoveis, vincular os clientes aos imovéis alocados e exibir somente os disponíveis.",
    link1: "https://github.com/romuloptmota/sistema-imoveis",
    imagemProjeto: [
      "./assets/imagem/projetos/imoveis/1.png",
      "./assets/imagem/projetos/imoveis/2.png",
      "./assets/imagem/projetos/imoveis/3.png"
    ],
    imagemHabilidades: [
      "./assets/imagem/logo-habilidades/html5.png",
      "./assets/imagem/logo-habilidades/css3.png",
      "./assets/imagem/logo-habilidades/bootstrap.png",
      "./assets/imagem/logo-habilidades/python.png",
      "./assets/imagem/logo-habilidades/django.png",
      "./assets/imagem/logo-habilidades/pycharm.png",
      "./assets/imagem/logo-habilidades/postgresql.png",
      "./assets/imagem/logo-habilidades/git.png",
      "./assets/imagem/logo-habilidades/github.png",
    ],
  }

];
