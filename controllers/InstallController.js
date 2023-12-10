const FuncionarioService = require("../services/FuncionarioService");
const ClienteService = require("../services/ClienteService");
const VendaService = require("../services/VendaService");
const ProdutoService = require("../services/ProdutoService");
const ProdutosVendaService = require("../services/ProdutosVendaService");

const produtos = [
  {
    nome: "Café",
    descricao: "250ml de café preto coado na hora",
    qtd_estoque: 40,
    preco: 2.5,
  },
  {
    nome: "Expresso",
    descricao: "400ml de café expresso estilo Nova York",
    qtd_estoque: 20,
    preco: 4,
  },
  {
    nome: "Café Latte",
    descricao: "300ml de café expresso com leite vaporizado",
    qtd_estoque: 30,
    preco: 3.5,
  },
  {
    nome: "Capuccino",
    descricao: "350ml de café expresso com leite vaporizado e espuma de leite",
    qtd_estoque: 25,
    preco: 4.2,
  },
  {
    nome: "Mocha",
    descricao:
      "350ml de café expresso com leite vaporizado, chocolate e chantilly",
    qtd_estoque: 18,
    preco: 4.8,
  },
  {
    nome: "Macchiato",
    descricao:
      "250ml de café expresso com uma pequena quantidade de leite vaporizado",
    qtd_estoque: 22,
    preco: 3.7,
  },
  {
    nome: "Café Americano",
    descricao: "400ml de café preto diluído em água quente",
    qtd_estoque: 14,
    preco: 3,
  },
  {
    nome: "Flat White",
    descricao:
      "350ml de café expresso com leite vaporizado em proporções iguais",
    qtd_estoque: 20,
    preco: 4.5,
  },
  {
    nome: "Café Gelado",
    descricao: "450ml de café gelado com gelo e opcionalmente leite ou xaropes",
    qtd_estoque: 12,
    preco: 4.2,
  },
  {
    nome: "Chá Mate",
    descricao: "500ml de chá mate natural ou com sabores",
    qtd_estoque: 10,
    preco: 3,
  },
  {
    nome: "Chocolate Quente",
    descricao: "300ml de chocolate quente cremoso",
    qtd_estoque: 25,
    preco: 5,
  },
  {
    nome: "Café com Leite",
    descricao: "350ml de café preto com leite vaporizado",
    qtd_estoque: 28,
    preco: 3.8,
  },

  {
    nome: "Pão de Queijo",
    descricao: "Delicioso pão de queijo assado, quentinho e crocante por fora",
    qtd_estoque: 50,
    preco: 2.5,
  },
  {
    nome: "Bolo de Cenoura",
    descricao: "Bolo macio de cenoura com cobertura de chocolate",
    qtd_estoque: 15,
    preco: 4,
  },
  {
    nome: "Coxinha de Frango",
    descricao: "Salgado brasileiro recheado com frango desfiado e temperos",
    qtd_estoque: 20,
    preco: 3,
  },
  {
    nome: "Brigadeiro",
    descricao:
      "Doce brasileiro feito com chocolate e leite condensado, coberto com granulado",
    qtd_estoque: 30,
    preco: 1.5,
  },
  {
    nome: "Torta de Limão",
    descricao: "Torta refrescante com creme de limão e cobertura de merengue",
    qtd_estoque: 10,
    preco: 3.8,
  },
  {
    nome: "Croissant",
    descricao: "Pão de massa folhada crocante e macia por dentro",
    qtd_estoque: 35,
    preco: 2,
  },
];

module.exports = {
  criarUsuarios: async (qtd) => {
    for (let i = 1; i <= qtd; i++) {
      const cliente = {
        usuario: `cliente-${i}`,
        email: `cliente${i}@gmail.com`,
        senha: `cliente-${i}`,
        telefone: `9999999999`,
        id_admin: 1,
      };
      await ClienteService.criarItem({
        usuario: cliente.usuario,
        email: cliente.email,
        senha: cliente.senha,
        telefone: cliente.telefone,
        id_admin: cliente.id_admin,
      });

      const funcionario = {
        usuario: `funcionario-${i}`,
        email: `funcionario${i}@gmail.com`,
        senha: `funcionario-${i}`,
        cargo: `atendente`,
        salario: 2000 + i * 500,
        id_admin: 1,
      };
      await FuncionarioService.criarItem({
        usuario: funcionario.usuario,
        email: funcionario.email,
        senha: funcionario.senha,
        cargo: funcionario.cargo,
        salario: funcionario.salario,
        id_admin: funcionario.id_admin,
      });
    }
    console.log(`Usuários criados com sucesso!`);
  },

  criarProdutos: async () => {
    for (let i = 0; i < produtos.length; i++) {
      const produto = produtos[i];
      await ProdutoService.criarItem({
        nome: produto.nome,
        descricao: produto.descricao,
        qtd_estoque: produto.qtd_estoque,
        preco: produto.preco,
      });
    }
  },
  criarVendas: async (qtd) => {
    for (let i = 1; i <= qtd; i++) {
      const venda = {
        id_cliente: i,
        id_funcionario: i,
      };
      await VendaService.criarItem({
        id_cliente: venda.id_cliente,
        id_funcionario: venda.id_funcionario,
      });
    }
  },
};
