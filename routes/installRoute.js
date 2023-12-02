const express = require("express");
const router = express.Router();
const sequelize = require("../helpers/database");
const auth = require("../helpers/auth");

const adminModel = require("../models/adminModel");
const clienteModel = require("../models/clienteModel");
const funcionarioModel = require("../models/funcionarioModel");
const vendaModel = require("../models/vendaModel");
const produtoModel = require("../models/produtoModel");

async function criarUsuarios(qtd) {
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
}

const verificarExistenciaClienteEFuncionario = async (
  idCliente,
  idFuncionario
) => {
  const clienteExistente = await clienteModel.getById(idCliente);
  const funcionarioExistente = await funcionarioModel.getById(idFuncionario);

  if (!clienteExistente) {
    throw new Error(`Cliente com id ${idCliente} não encontrado.`);
  }

  if (!funcionarioExistente) {
    throw new Error(`Funcionário com id ${idFuncionario} não encontrado.`);
  }
};

const criarVenda = async (valorVenda, idFuncionario, idCliente) => {
  try {
    await verificarExistenciaClienteEFuncionario(idCliente, idFuncionario);

    // Se as verificações passarem, então o cliente e o funcionário existem
    await vendaModel.save(valorVenda, idFuncionario, idCliente);
  } catch (error) {
    console.error(`Erro ao criar venda: ${error.message}`);
  }
};

router.get("/", auth, async (req, res) => {
  await sequelize.sync({ force: true });

  criarUsuarios(10);

  await produtoModel.save("Café", "250ml de café preto coado na hora", 40, 2.5);
  await produtoModel.save(
    "Expressso",
    "400ml de café expresso estilo Nova Yourque",
    20,
    4
  );
  await produtoModel.save(
    "Café Latte",
    "300ml de café expresso com leite vaporizado",
    30,
    3.5
  );
  await produtoModel.save(
    "Capuccino",
    "350ml de café expresso com leite vaporizado e espuma de leite",
    25,
    4.2
  );
  await produtoModel.save(
    "Mocha",
    "350ml de café expresso com leite vaporizado, chocolate e chantilly",
    18,
    4.8
  );
  await produtoModel.save(
    "Macchiato",
    "250ml de café expresso com uma pequena quantidade de leite vaporizado",
    22,
    3.7
  );
  await produtoModel.save(
    "Café Americano",
    "400ml de café preto diluído em água quente",
    15,
    3
  );
  await produtoModel.save(
    "Flat White",
    "350ml de café expresso com leite vaporizado em proporções iguais",
    20,
    4.5
  );
  await produtoModel.save(
    "Café Gelado",
    "450ml de café gelado com gelo e opcionalmente leite ou xaropes",
    12,
    4.2
  );
  await produtoModel.save(
    "Chá Mate",
    "500ml de chá mate natural ou com sabores",
    10,
    3
  );
  await produtoModel.save(
    "Chocolate Quente",
    "300ml de chocolate quente cremoso",
    25,
    5
  );
  await produtoModel.save(
    "Café com Leite",
    "350ml de café preto com leite vaporizado",
    28,
    3.8
  );

  // Exemplos de chamadas
  await criarVenda(40.0, 1, 1);
  await criarVenda(35.5, 1, 2);
  await criarVenda(72.3, 2, 2);
  await criarVenda(45.25, 1, 2); 
  await criarVenda(33.9, 3, 6);
  await criarVenda(48.6, 9, 4);
  await criarVenda(67.4, 5, 1);
  await criarVenda(30.3, 8, 4);
  await criarVenda(20, 7, 3);
  await criarVenda(10, 9, 3);

  res.json({ message: `Instalação concluída com sucesso!` });
});

module.exports = router;
