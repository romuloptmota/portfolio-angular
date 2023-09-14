export interface FormacaoAcademica {
  id: number;
  link: string;
  logo: string;
  nivel: string;
  formacao: string;
  descricao: string;
}

export const formacoesAcadenica = [
  {
    id: 1,
    link: "https://multivix.edu.br/",
    logo: "assets/imagem/logo-instituicoes/multivix.jpg",
    nivel: "Pós",
    formacao: "Especialização em análise e desenvolvimento de sistema em tecnologia Python | Jan 2023 | Multivix",
    descricao: "Curso focado em aprimorar o conhecimento na linguagem estruturada utilizada no back-end de qualquer aplicação que demande escalabilidade, regras de negócio, lógica e afins.",
  },
  {
    id: 2,
    link: "https://www.unopar.com.br/",
    logo: "assets/imagem/logo-instituicoes/unopar.png",
    nivel: "Superior",
    formacao: "Análise e desenvolvimento de sistemas | Jul 2022 | Universidade do norte do Paraná",
    descricao: "Curso superior com direcionamento de carreira nas áreas de devops, mobile, back-end e front-end.",
  },
  {
    id: 3,
    link: "https://startcapgemini.com.br/",
    logo: "assets/imagem/logo-instituicoes/capgemini.png",
    nivel: "Treinamento",
    formacao: "Programa START by Capgemini | Cursando 2023 | Capgemini",
    descricao: "Participando do programa Start By Capgemini na Trilha Java, onde estou aprimorando todos os conhecimentos necessários em desenvolvimento web utilizando Angular e Java. Uma dupla poderosa para o desenvolvimento web. ",
  },

];
