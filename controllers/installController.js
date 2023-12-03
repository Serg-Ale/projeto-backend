const express = require("express");

const adminModel = require("../models/adminModel");
const funcionarioModel = require("../models/funcionarioModel");
const clienteModel = require("../models/clienteModel");
const vendaModel = require("../models/vendaModel");
const produtoModel = require("../models/produtoModel");

const produtos = [
  {
    nome: "Café",
    descricao: "250ml de café preto coado na hora",
    quantidade: 40,
    preco: 2.5,
  },
  {
    nome: "Expresso",
    descricao: "400ml de café expresso estilo Nova York",
    quantidade: 20,
    preco: 4,
  },
  {
    nome: "Café Latte",
    descricao: "300ml de café expresso com leite vaporizado",
    quantidade: 30,
    preco: 3.5,
  },
  {
    nome: "Capuccino",
    descricao: "350ml de café expresso com leite vaporizado e espuma de leite",
    quantidade: 25,
    preco: 4.2,
  },
  {
    nome: "Mocha",
    descricao:
      "350ml de café expresso com leite vaporizado, chocolate e chantilly",
    quantidade: 18,
    preco: 4.8,
  },
  {
    nome: "Macchiato",
    descricao:
      "250ml de café expresso com uma pequena quantidade de leite vaporizado",
    quantidade: 22,
    preco: 3.7,
  },
  {
    nome: "Café Americano",
    descricao: "400ml de café preto diluído em água quente",
    quantidade: 15,
    preco: 3,
  },
  {
    nome: "Flat White",
    descricao:
      "350ml de café expresso com leite vaporizado em proporções iguais",
    quantidade: 20,
    preco: 4.5,
  },
  {
    nome: "Café Gelado",
    descricao: "450ml de café gelado com gelo e opcionalmente leite ou xaropes",
    quantidade: 12,
    preco: 4.2,
  },
  {
    nome: "Chá Mate",
    descricao: "500ml de chá mate natural ou com sabores",
    quantidade: 10,
    preco: 3,
  },
  {
    nome: "Chocolate Quente",
    descricao: "300ml de chocolate quente cremoso",
    quantidade: 25,
    preco: 5,
  },
  {
    nome: "Café com Leite",
    descricao: "350ml de café preto com leite vaporizado",
    quantidade: 28,
    preco: 3.8,
  },

  {
    nome: "Pão de Queijo",
    descricao: "Delicioso pão de queijo assado, quentinho e crocante por fora",
    quantidade: 50,
    preco: 2.5,
  },
  {
    nome: "Bolo de Cenoura",
    descricao: "Bolo macio de cenoura com cobertura de chocolate",
    quantidade: 15,
    preco: 4,
  },
  {
    nome: "Coxinha de Frango",
    descricao: "Salgado brasileiro recheado com frango desfiado e temperos",
    quantidade: 20,
    preco: 3,
  },
  {
    nome: "Brigadeiro",
    descricao:
      "Doce brasileiro feito com chocolate e leite condensado, coberto com granulado",
    quantidade: 30,
    preco: 1.5,
  },
  {
    nome: "Torta de Limão",
    descricao: "Torta refrescante com creme de limão e cobertura de merengue",
    quantidade: 10,
    preco: 3.8,
  },
  {
    nome: "Croissant",
    descricao: "Pão de massa folhada crocante e macia por dentro",
    quantidade: 35,
    preco: 2,
  },
];

async function verificarExistenciaClienteEFuncionario(
  idCliente,
  idFuncionario
) {
  const clienteExistente = await clienteModel.getById(idCliente);
  const funcionarioExistente = await funcionarioModel.getById(idFuncionario);

  if (!clienteExistente) {
    throw new Error(`Cliente com id ${idCliente} não encontrado.`);
  }

  if (!funcionarioExistente) {
    throw new Error(`Funcionário com id ${idFuncionario} não encontrado.`);
  }
}

module.exports = {
  criarUsuarios: async (qtd) => {
    for (let i = 1; i <= qtd; i++) {
      const admin = {
        usuario: `adm-${i}`,
        email: `adm${i}@cafeteria.com`,
        senha: `senhaAdmin${i}`,
      };
      await adminModel.save(admin.usuario, admin.email, admin.senha);

      const cliente = {
        usuario: `cliente-${i}`,
        email: `cliente${i}@gmail.com`,
        senha: `senhaCliente${i}`,
        telefone: `9 999 999${i}`,
        id_admin: i,
      };
      await clienteModel.save(
        cliente.usuario,
        cliente.email,
        cliente.senha,
        cliente.telefone,
        cliente.id_admin
      );

      const funcionario = {
        usuario: `funcionario-${i}`,
        email: `funcionario${i}@cafeteria.com`,
        senha: `senhaFunc${i}`,
        cargo: `atendente`,
        salario: 2000 + i * 500,
        id_admin: i,
      };
      await funcionarioModel.save(
        funcionario.usuario,
        funcionario.email,
        funcionario.senha,
        funcionario.cargo,
        funcionario.salario,
        funcionario.id_admin
      );
    }
    console.log(`Usuários criados com sucesso!`);
  },

  criarVenda: async (qtd) => {
    const valor = 30;
    try {
      for (let i = 1; i <= qtd; i++) {
        await verificarExistenciaClienteEFuncionario(i, i);
        await vendaModel.save(valor, i, i);
      }
    } catch (error) {
      console.error(`Erro ao criar venda: ${error.message}`);
    }
  },

  criarProdutos: async () => {
    for (let i = 0; i < produtos.length; i++) {
      const produto = produtos[i];
      await produtoModel.save(
        produto.nome,
        produto.descricao,
        produto.quantidade,
        produto.preco
      );
    }
  },
};
